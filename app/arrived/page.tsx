'use client';
import { useEffect } from 'react';
import PhoneFrame from '@/components/vayrix/PhoneFrame';
import { useRouter } from 'next/navigation';
import { MapPin, Phone } from 'lucide-react';

export default function ArrivedPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push('/in-progress'), 4000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <PhoneFrame>
      <div className="w-full h-full flex flex-col items-center justify-center px-6 gap-6 animate-slide-up">
        <div className="w-20 h-20 bg-vayrix-success rounded-full flex items-center justify-center animate-pulse-glow">
          <MapPin size={40} className="text-white" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold font-syne text-vayrix-text mb-2">Chauffeur arrivé!</h1>
          <p className="text-vayrix-muted">Rendez-vous au point de prise</p>
        </div>
        <button className="mt-6 px-6 py-3 bg-vayrix-blue text-white rounded-lg font-semibold hover:opacity-90 transition">
          <Phone className="inline mr-2" size={18} /> Appeler
        </button>
      </div>
    </PhoneFrame>
  );
}
