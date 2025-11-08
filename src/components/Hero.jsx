import React from 'react';
import { Star, Rocket, ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-amber-50 to-white pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-700 shadow-sm">
            <Star className="text-amber-500" size={14} /> New: 3D Interactive Menu
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Turn your paper menu into a stunning 3D experience
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            Let guests explore dishes in 3D, scan a QR at the table, and order with confidence. Beautiful, fast, and made for restaurants.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#qr" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800">
              Generate QR <ArrowRight className="ml-2" size={16} />
            </a>
            <a href="#menu" className="inline-flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-900 px-6 py-3 text-sm font-medium hover:bg-gray-50">
              See 3D Menu
            </a>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px]">
          <div className="absolute -inset-10 rounded-[40px] bg-gradient-to-tr from-rose-200/40 via-amber-200/40 to-transparent blur-3xl pointer-events-none" />
          <div className="w-full h-full rounded-3xl overflow-hidden border border-gray-200 shadow-lg bg-white">
            <Spline scene="https://prod.spline.design/8m9i0Xv1y8q4yD3g/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-2 text-[10px]">
            <span className="rounded-full bg-white/80 border border-gray-200 px-2 py-1 text-gray-700 text-center">Drag to rotate</span>
            <span className="rounded-full bg-white/80 border border-gray-200 px-2 py-1 text-gray-700 text-center">Scroll to zoom</span>
            <span className="rounded-full bg-white/80 border border-gray-200 px-2 py-1 text-gray-700 text-center">Tap to interact</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
