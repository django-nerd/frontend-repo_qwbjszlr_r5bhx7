import { ShoppingBag, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Aero Knit Sneakers',
    price: 129,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Minimalist Hoodie',
    price: 89,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1548883354-6d750f79c8f3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Everyday Backpack',
    price: 149,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Classic Sunglasses',
    price: 99,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function ProductGrid() {
  return (
    <section id="new" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">New arrivals</h2>
          <p className="mt-1 text-sm text-gray-600">Handpicked premium products</p>
        </div>
        <a href="#" className="text-sm font-medium text-gray-900 hover:underline">View all</a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <div key={p.id} className="group overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <button className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-black/90 px-4 py-2 text-xs font-medium text-white opacity-0 shadow-md ring-1 ring-black/5 transition-opacity duration-200 group-hover:opacity-100">
                <ShoppingBag size={14} /> Add to cart
              </button>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">{p.name}</h3>
                <div className="text-sm font-semibold">${p.price}</div>
              </div>
              <div className="mt-1 flex items-center gap-1 text-xs text-amber-600">
                <Star size={14} fill="currentColor" />
                <span className="text-gray-600">{p.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
