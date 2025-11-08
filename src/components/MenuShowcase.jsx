import React from 'react';
import { Flame, Sparkles, Utensils } from 'lucide-react';

const categories = [
  {
    title: 'Signature Plates',
    desc: 'Chef-crafted mains with immersive 3D previews',
    color: 'from-rose-500 to-amber-500',
    icon: <Flame size={18} />,
  },
  {
    title: 'Small Bites',
    desc: 'Tapas and starters to share',
    color: 'from-emerald-500 to-teal-500',
    icon: <Sparkles size={18} />,
  },
  {
    title: 'Desserts',
    desc: 'Sweet endings in rich detail',
    color: 'from-indigo-500 to-violet-500',
    icon: <Utensils size={18} />,
  },
];

const dishes = [
  {
    name: 'Truffle Pasta',
    price: '$18',
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1521389508051-d7ffb5dc8bbf?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Avocado Toast',
    price: '$12',
    rating: 4.6,
    img: 'https://images.unsplash.com/photo-1559622214-9d01b833ae9a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Berry Pancakes',
    price: '$14',
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Ahi Poke Bowl',
    price: '$16',
    rating: 4.7,
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
  },
];

const MenuShowcase = () => {
  return (
    <section id="menu" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Explore the Menu</h2>
            <p className="mt-2 text-gray-600">Browse featured dishes. Tap any card to open its 3D view.</p>
          </div>
          <div className="hidden md:flex gap-3">
            {categories.map((c) => (
              <div key={c.title} className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${c.color} text-white px-4 py-2 text-xs shadow`}> 
                {c.icon}
                {c.title}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((d) => (
            <button
              key={d.name}
              className="group text-left rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md focus:ring-2 focus:ring-rose-500 focus:outline-none"
              onClick={() => window.location.hash = 'menu'}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={d.img} alt={d.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{d.name}</h3>
                  <span className="text-sm text-gray-700">{d.price}</span>
                </div>
                <p className="mt-1 text-xs text-gray-500">Rating {d.rating} ★</p>
                <div className="mt-3 inline-flex items-center text-rose-600 text-sm">View in 3D →</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuShowcase;
