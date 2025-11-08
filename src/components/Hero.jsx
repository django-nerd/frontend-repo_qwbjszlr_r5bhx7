import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-blue-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,0,122,0.07),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(0,122,255,0.07),transparent_40%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:px-8">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-gray-700 backdrop-blur">
            <Star size={14} className="text-amber-500" />
            New season just dropped
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Elevate your look with top-end essentials
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-gray-600">
            Discover premium selections crafted for comfort and style. Shop the latest arrivals and bestsellers curated for modern living.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#new" className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90">
              Shop new in
              <ArrowRight size={16} className="ml-2" />
            </a>
            <a href="#bestsellers" className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50">
              View bestsellers
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 text-center sm:max-w-md">
            <div>
              <div className="text-2xl font-bold">50k+</div>
              <div className="text-xs text-gray-500">Happy customers</div>
            </div>
            <div>
              <div className="text-2xl font-bold">4.8/5</div>
              <div className="text-xs text-gray-500">Average rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold">24h</div>
              <div className="text-xs text-gray-500">Fast shipping</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1400&auto=format&fit=crop"
              alt="Featured products"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
