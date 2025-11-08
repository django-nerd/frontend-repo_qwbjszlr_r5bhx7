import React, { useMemo } from 'react';
import { QrCode, Copy, Check } from 'lucide-react';

const QRSection = () => {
  const [copied, setCopied] = React.useState(false);
  const qrUrl = useMemo(() => {
    // In a real app this would be dynamic per table/restaurant
    return window.location.origin + '/#menu';
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(qrUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section id="qr" className="py-16 bg-gradient-to-b from-white to-rose-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-10 shadow-sm grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Instant QR menu</h3>
            <p className="mt-2 text-gray-600">Print once, update forever. Each table gets a unique QR to your 3D menu. No apps required.</p>
            <div className="mt-6 flex items-center gap-3">
              <code className="rounded-xl bg-gray-100 px-3 py-2 text-sm text-gray-800">{qrUrl}</code>
              <button onClick={handleCopy} className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm hover:bg-gray-800">
                {copied ? <Check size={16}/> : <Copy size={16}/>} {copied ? 'Copied' : 'Copy link'}
              </button>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-gray-700 list-disc list-inside">
              <li>Scannable on any smartphone</li>
              <li>Optimized for low light and glare</li>
              <li>Supports multiple languages</li>
            </ul>
          </div>

          <div className="grid place-items-center">
            <div className="relative h-56 w-56 sm:h-64 sm:w-64 rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
              <div className="absolute -inset-6 bg-gradient-to-tr from-rose-200/50 via-amber-200/40 to-transparent blur-2xl pointer-events-none" />
              <div className="h-full w-full grid place-items-center">
                {/* Simple generated QR visual substitute */}
                <div className="h-44 w-44 rounded bg-[radial-gradient(theme(colors.gray.900)_1px,transparent_1px)] [background-size:12px_12px]" aria-hidden />
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-gray-600">
                <span className="inline-flex items-center gap-1"><QrCode size={14}/> Scan me</span>
                <span>Table A1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRSection;
