import { ArrowRight } from 'lucide-react';

const collections = [
  {
    title: 'Modern Minimal',
    image: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaW5pbWFsfGVufDB8MHx8fDE3NjI2MjQ0MTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    href: '#',
  },
  {
    title: 'Outdoor Ready',
    image: 'https://images.unsplash.com/photo-1761849387075-9561384f0c85?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPdXRkb29yJTIwUmVhZHl8ZW58MHwwfHx8MTc2MjYyNDQxOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    href: '#',
  },
  {
    title: 'Work Essentials',
    image: 'https://images.unsplash.com/photo-1679762803080-fed99808656d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXb3JrJTIwRXNzZW50aWFsc3xlbnwwfDB8fHwxNzYyNjI0NDE4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    href: '#',
  },
];

export default function Collections() {
  return (
    <section id="collections" className="mx-auto max-w-7xl px-4 pb-8 pt-0 sm:px-6 lg:px-8 lg:py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Curated collections</h2>
          <p className="mt-1 text-sm text-gray-600">Find your vibe</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((c) => (
          <a key={c.title} href={c.href} className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
            <div className="relative aspect-[5/4] w-full">
              <img src={c.image} alt={c.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
              <span className="text-lg font-semibold">{c.title}</span>
              <ArrowRight size={18} className="opacity-80 transition-opacity group-hover:opacity-100" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
