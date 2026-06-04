'use client';
import { useEffect } from 'react';
import PhoneFrame from '@/components/vayrix/PhoneFrame';
import { useVayrixStore } from '@/lib/store';
import { useRouter } from 'next/navigation';

export default function SearchingPage() {
  const router = useRouter();
  const { setStep, setDriver } = useVayrixStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      const mockDriver = { id: 1, name: "Jean Paul Mvondo", avatar: "JP", rating: 4.8, plate: "BK 123 AB", vehicle: "Toyota Corolla", eta: 2 };
      setDriver(mockDriver);
      setStep(5);
      router.push('/driver-found');
    }, 3000);
    return () => clearTimeout(timer);
  }, [router, setDriver, setStep]);

  return (
    <PhoneFrame>
      <div className="w-full h-full flex flex-col items-center justify-center gap-8 px-6">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 rounded-full border-4 border-vayrix-border animate-radar-rotate"></div>
          <div className="absolute inset-3 rounded-full border-2 border-vayrix-blue animate-radar-rotate" style={{animationDelay: "-1.5s"}}></div>
          <div className="absolute inset-6 rounded-full border border-vayrix-cyan animate-radar-rotate" style={{animationDelay: "-2.5s"}}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-vayrix-cyan rounded-full animate-pulse-glow"></div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold font-syne text-vayrix-text mb-2">Recherche en cours...</h2>
          <p className="text-vayrix-muted">Trouvez votre chauffeur</p>
          <div className="flex justify-center gap-1 mt-4">
            <div className="w-2 h-2 bg-vayrix-blue rounded-full animate-dot-bounce"></div>
            <div className="w-2 h-2 bg-vayrix-blue rounded-full animate-dot-bounce delay-200"></div>
            <div className="w-2 h-2 bg-vayrix-blue rounded-full animate-dot-bounce delay-400"></div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
