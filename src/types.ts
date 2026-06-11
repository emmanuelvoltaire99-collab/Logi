
export interface User {
  uid: string;
  email: string;
  role: 'admin' | 'employee';
  name: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Supplier {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
}

export interface Product {
  id: string;
  name: string;
  categoryId: string;
  description: string;
  purchasePrice: number;
  salePrice: number;
  stockQuantity: number;
  minStock: number;
  supplierId: string;
  createdAt: string;
  expiryDate?: string;
}

export interface StockEntry {
  id: string;
  productId: string;
  quantity: number;
  purchasePrice: number;
  supplierId: string;
  date: string;
}

export interface SaleItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Sale {
  id: string;
  items: SaleItem[];
  total: number;
  date: string;
  cashierId: string;
}

export interface Notification {
  id: string;
  type: 'low_stock' | 'expiry';
  productId: string;
  productName: string;
  message: string;
  createdAt: string;
  read: boolean;
}
