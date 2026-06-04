'use client';
import { useEffect } from 'react';
import PhoneFrame from '@/components/vayrix/PhoneFrame';
import MapPlaceholder from '@/components/vayrix/MapPlaceholder';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function TrackingPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push('/arrived'), 5000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <PhoneFrame>
      <div className="w-full h-full flex flex-col px-6 py-8 gap-4">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-vayrix-muted"><ArrowLeft size={20} /></button>
        <h2 className="text-xl font-bold font-syne text-vayrix-text">Chauffeur arrive</h2>
        <div className="relative p-4 bg-vayrix-surface rounded-lg border-2 border-vayrix-blue">
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-vayrix-success rounded-full animate-live-blink"></div>
          <p className="text-vayrix-cyan font-semibold">En route vers vous</p>
          <p className="text-sm text-vayrix-muted mt-1">ETA: 2 min</p>
        </div>
        <MapPlaceholder />
        <div className="mt-auto text-center">
          <p className="text-vayrix-muted text-sm">Préparez-vous à la montée</p>
        </div>
      </div>
    </PhoneFrame>
  );
}
