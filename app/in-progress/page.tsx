'use client';
import { useEffect, useState } from 'react';
import PhoneFrame from '@/components/vayrix/PhoneFrame';
import MapPlaceholder from '@/components/vayrix/MapPlaceholder';
import { useRouter } from 'next/navigation';
import { Clock, MapPin } from 'lucide-react';

export default function InProgressPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(timer);
          router.push('/completed');
          return 100;
        }
        return p + 10;
      });
    }, 500);
    return () => clearInterval(timer);
  }, [router]);

  return (
    <PhoneFrame>
      <div className="w-full h-full flex flex-col px-6 py-8 gap-4">
        <h2 className="text-2xl font-bold font-syne text-vayrix-text">Course en cours</h2>
        <MapPlaceholder />
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-vayrix-muted mb-1">
            <span>Progression</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-2 bg-vayrix-surface rounded-full overflow-hidden border border-vayrix-border">
            <div className="h-full bg-vayrix-cyan rounded-full" style={{ width: `${progress}%`, transition: "width 0.5s ease" }}></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="p-3 bg-vayrix-surface rounded-lg border border-vayrix-border">
            <Clock size={16} className="text-vayrix-cyan mb-1" />
            <p className="text-vayrix-muted">12 min</p>
            <p className="text-vayrix-text font-semibold">Temps restant</p>
          </div>
          <div className="p-3 bg-vayrix-surface rounded-lg border border-vayrix-border">
            <MapPin size={16} className="text-vayrix-cyan mb-1" />
            <p className="text-vayrix-muted">8.5 km</p>
            <p className="text-vayrix-text font-semibold">Distance restante</p>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
