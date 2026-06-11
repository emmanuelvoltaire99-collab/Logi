/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Search,
  Bell,
  Plus,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div id="app-container" className="h-screen flex bg-[#F8FAFC] font-sans text-[#334155] overflow-hidden">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        id="sidebar" 
        className={`fixed inset-y-0 left-0 z-50 w-56 bg-[#1E293B] flex flex-col shrink-0 text-slate-400 transform transition-transform duration-300 md:translate-x-0 md:relative ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div id="logo-container" className="p-5 flex items-center justify-between gap-3 border-b border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Package className="text-white" size={18} />
            </div>
            <span className="font-bold text-white tracking-tight">CafetStock Pro</span>
          </div>
          <button className="md:hidden text-slate-400" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>
        <nav id="nav-menu" className="p-3 flex-1 space-y-1">
          <div className="bg-blue-600/10 text-blue-400 p-2 rounded-md flex items-center gap-3 text-xs font-semibold cursor-pointer">
            <LayoutDashboard size={16} />
            Tableau de bord
          </div>
          <div className="p-2 rounded-md hover:bg-slate-800 transition-colors flex items-center gap-3 text-xs font-medium cursor-pointer">
            <Package size={16} />
            Inventaire
          </div>
          <div className="p-2 rounded-md hover:bg-slate-800 transition-colors flex items-center gap-3 text-xs font-medium cursor-pointer">
            <ShoppingCart size={16} />
            Ventes & Caisse
          </div>
          <div className="p-2 rounded-md hover:bg-slate-800 transition-colors flex items-center gap-3 text-xs font-medium cursor-pointer">
            <Users size={16} />
            Fournisseurs
          </div>
          <div className="p-2 rounded-md hover:bg-slate-800 transition-colors flex items-center gap-3 text-xs font-medium cursor-pointer">
            <BarChart3 size={16} />
            Rapports
          </div>
        </nav>
      </aside>
      
      <main id="main-content" className="flex-1 flex flex-col h-screen overflow-hidden bg-[#F8FAFC]">
        <header id="main-header" className="h-14 bg-white border-b border-slate-200 flex items-center px-4 md:px-6 justify-between shrink-0">
          <div className="flex items-center gap-2">
            <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg" onClick={() => setSidebarOpen(true)}>
              <Menu size={20} />
            </button>
            <h1 className="text-sm font-semibold text-slate-800">Vue d'ensemble</h1>
          </div>
          <div id="header-tools" className="flex items-center gap-2 md:gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 hidden sm:block" size={14} />
              <input type="text" placeholder="Rechercher..." className="bg-slate-100 border-none rounded-full py-1.5 pl-8 pr-4 text-xs w-32 md:w-64 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <button className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors relative">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="bg-[#2563EB] text-white px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-2 hover:bg-blue-700">
              <Plus size={14} />
              <span className="hidden sm:inline">Nouvelle Vente</span>
            </button>
          </div>
        </header>

        <div id="content-grid" className="p-4 md:p-6 space-y-6 overflow-y-auto">
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
                <span className="text-2xl font-bold text-slate-800">4.8k €</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
