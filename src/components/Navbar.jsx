import React, { useState } from 'react';
import { Menu, X, QrCode, Search, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-rose-500 to-amber-500 grid place-items-center text-white font-bold">M</div>
            <span className="font-semibold tracking-tight text-lg">MenuXR</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#menu" className="hover:text-rose-600 transition-colors">Menu</a>
            <a href="#specials" className="hover:text-rose-600 transition-colors">Specials</a>
            <a href="#qr" className="hover:text-rose-600 transition-colors flex items-center gap-2"><QrCode size={16}/> QR</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                className="w-56 rounded-full border border-gray-200 pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="Search dishes..."
              />
            </div>
            <button className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm hover:bg-gray-800">
              <ShoppingBag size={16}/> Order
            </button>
          </div>

          <button className="md:hidden p-2" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
            {open ? <X/> : <Menu/>}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#menu" className="block px-2 py-2 rounded hover:bg-gray-50">Menu</a>
            <a href="#specials" className="block px-2 py-2 rounded hover:bg-gray-50">Specials</a>
            <a href="#qr" className="block px-2 py-2 rounded hover:bg-gray-50">QR</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
