'use client';
import PhoneFrame from '@/components/vayrix/PhoneFrame';
import MapPlaceholder from '@/components/vayrix/MapPlaceholder';
import { useVayrixStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { mockRoutes } from '@/lib/mockData';

export default function HomePage() {
  const router = useRouter();
  const { setDestination, setStep } = useVayrixStore();

  const handleSelect = (dest: string) => {
    setDestination(dest);
    setStep(3);
    router.push('/vehicle');
  };

  return (
    <PhoneFrame>
      <div className="w-full h-full flex flex-col px-6 py-8 gap-4">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-vayrix-muted hover:text-vayrix-cyan mb-2"><ArrowLeft size={20} /> Retour</button>
        <h1 className="text-3xl font-bold font-syne text-vayrix-text">Où allez-vous?</h1>
        <MapPlaceholder />
        <div className="flex-1 flex flex-col gap-3 mt-4">
          {mockRoutes.map((route, idx) => (
            <button key={idx} onClick={() => handleSelect(route.label)} className="p-4 bg-vayrix-surface rounded-lg border border-vayrix-border hover:bg-vayrix-card hover:border-vayrix-blue transition text-left animate-fade-in" style={{animationDelay: `${idx*100}ms`}}>
              <p className="font-medium text-vayrix-text">{route.label}</p>
              <p className="text-sm text-vayrix-muted">{route.distance} • {route.duration}</p>
            </button>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}
