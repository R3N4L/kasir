/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  price: number;
  costPrice: number; // For profit/loss calculations
  stock: number;
  minStock: number; // Minimum threshold before low stock alert
  imageUrl?: string;
}

export interface TransactionItem {
  productId: string;
  sku: string;
  name: string;
  price: number;
  costPrice: number;
  qty: number;
  discount: number; // discount amount per item
  total: number;
}

export interface Transaction {
  id: string;
  invoiceNumber: string;
  date: string; // ISO String
  items: TransactionItem[];
  subTotal: number;
  discountTotal: number;
  taxTotal: number;
  total: number;
  paymentMethod: 'cash' | 'qris' | 'gopay' | 'ovo' | 'dana' | 'shopeepay';
  cashAmount?: number;
  changeAmount?: number;
  cashierId: string;
  cashierName: string;
}

export interface User {
  id: string;
  username: string;
  name: string;
  role: 'admin' | 'cashier' | 'owner';
  active: boolean;
}

export interface SyncConfig {
  googleSheetsUrl: string;
  isEnabled: boolean;
  lastSyncedAt?: string;
}

export interface StoreSettings {
  name: string;
  address: string;
  phone: string;
  isTaxEnabled: boolean;
  taxPercentage: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

// Pre-seeded initial data
export const INITIAL_CATEGORIES: Category[] = [
  { id: '1', name: 'Makanan', icon: 'Utensils' },
  { id: '2', name: 'Minuman Kopi', icon: 'Coffee' },
  { id: '3', name: 'Minuman Non-Kopi', icon: 'CupSoda' },
  { id: '4', name: 'Camilan', icon: 'Cookie' },
];

export const INITIAL_PRODUCTS: Product[] = [];

// Seeded Transactions across the last few days to populate dashboards with realistic data
export const INITIAL_TRANSACTIONS: Transaction[] = [];
