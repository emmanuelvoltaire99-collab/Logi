import React, { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Product } from '../types';

export default function InventoryView() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState('');
  const [salePrice, setSalePrice] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
      setProducts(productsData);
    });
    return unsubscribe;
  }, []);

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !salePrice) return;
    
    await addDoc(collection(db, 'products'), {
      name,
      salePrice: Number(salePrice),
      categoryId: 'default',
      stockQuantity: 0,
      minStock: 5,
      createdAt: new Date().toISOString(),
    });
    setName('');
    setSalePrice('');
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleAddProduct} className="bg-white p-6 rounded-xl border border-slate-200 flex gap-4">
        <input 
          placeholder="Nom du produit" 
          className="border rounded px-3 py-2 text-sm flex-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="number"
          placeholder="Prix de vente (FCFA)" 
          className="border rounded px-3 py-2 text-sm w-32"
          value={salePrice}
          onChange={(e) => setSalePrice(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold">Ajouter</button>
      </form>
      
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-400 text-xs uppercase font-bold">
            <tr>
              <th className="px-4 py-2">Produit</th>
              <th className="px-4 py-2">Prix</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {products.map(p => (
              <tr key={p.id}>
                <td className="px-4 py-2">{p.name}</td>
                <td className="px-4 py-2">{p.salePrice} FCFA</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
