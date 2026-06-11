import React from 'react';

export default function DashboardView() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <p className="text-xs font-medium text-slate-500 mb-1">Produits Totaux</p>
        <div className="flex items-end justify-between">
          <span className="text-2xl font-bold text-slate-800">142</span>
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <p className="text-xs font-medium text-slate-500 mb-1">Stock Faible</p>
        <div className="flex items-end justify-between">
          <span className="text-2xl font-bold text-orange-600">08</span>
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <p className="text-xs font-medium text-slate-500 mb-1">Ventes du Jour</p>
        <div className="flex items-end justify-between">
          <span className="text-2xl font-bold text-slate-800">45</span>
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <p className="text-xs font-medium text-slate-500 mb-1">Valeur Stock</p>
        <div className="flex items-end justify-between">
          <span className="text-2xl font-bold text-slate-800">4.8k FCFA</span>
        </div>
      </div>
    </div>
  );
}
