import { useState } from 'react';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-white">
            <ShoppingCart size={20} />
          </div>
          <span className="text-xl font-semibold tracking-tight">TopEnd</span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#new" className="text-sm text-gray-700 hover:text-black">New</a>
          <a href="#bestsellers" className="text-sm text-gray-700 hover:text-black">Bestsellers</a>
          <a href="#collections" className="text-sm text-gray-700 hover:text-black">Collections</a>
          <a href="#sale" className="text-sm text-gray-700 hover:text-black">Sale</a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              className="w-56 rounded-full border border-gray-200 bg-white px-9 py-2 text-sm outline-none ring-0 placeholder:text-gray-400 focus:border-gray-300"
              placeholder="Search products"
              aria-label="Search products"
            />
          </div>
          <button className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50">Sign in</button>
          <button className="relative rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90">
            Cart
            <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-rose-500 px-1 text-xs text-white">2</span>
          </button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            <a href="#new" className="py-2 text-sm">New</a>
            <a href="#bestsellers" className="py-2 text-sm">Bestsellers</a>
            <a href="#collections" className="py-2 text-sm">Collections</a>
            <a href="#sale" className="py-2 text-sm">Sale</a>
          </div>
        </div>
      )}
    </header>
  );
}
