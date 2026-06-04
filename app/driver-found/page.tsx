'use client';
import PhoneFrame from '@/components/vayrix/PhoneFrame';
import { useVayrixStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { Star, Phone, MapPin } from 'lucide-react';

export default function DriverFoundPage() {
  const router = useRouter();
  const { selectedDriver, setStep } = useVayrixStore();

  const handleStart = () => {
    setStep(6);
    router.push('/tracking');
  };

  if (!selectedDriver) return <PhoneFrame><div>Driver not found</div></PhoneFrame>;

  return (
    <PhoneFrame>
      <div className="w-full h-full flex flex-col px-6 py-8 gap-6 animate-fade-in">
        <h1 className="text-2xl font-bold font-syne text-vayrix-text">Chauffeur trouvé!</h1>

        <div className="bg-vayrix-surface rounded-lg p-6 border border-vayrix-border">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-vayrix-blue flex items-center justify-center text-white font-bold text-xl">{selectedDriver.avatar}</div>
            <div className="flex-1">
              <p className="font-bold text-vayrix-text text-lg">{selectedDriver.name}</p>
              <div className="flex items-center gap-1 mt-1">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < Math.floor(selectedDriver.rating) ? "#3B7BE8" : "#8896B0"} stroke="none" />
                  ))}
                </div>
                <span className="text-sm text-vayrix-muted">{selectedDriver.rating}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-vayrix-muted">Véhicule:</span> <span className="text-vayrix-text">{selectedDriver.vehicle}</span></div>
            <div className="flex justify-between"><span className="text-vayrix-muted">Plaque:</span> <span className="text-vayrix-text">{selectedDriver.plate}</span></div>
            <div className="flex justify-between"><span className="text-vayrix-muted">ETA:</span> <span className="text-vayrix-cyan font-bold">{selectedDriver.eta} min</span></div>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 px-4 py-3 bg-vayrix-surface rounded-lg border border-vayrix-border text-vayrix-text hover:bg-vayrix-card transition flex items-center justify-center gap-2">
            <Phone size={18} /> Appel
          </button>
          <button className="flex-1 px-4 py-3 bg-vayrix-surface rounded-lg border border-vayrix-border text-vayrix-text hover:bg-vayrix-card transition flex items-center justify-center gap-2">
            <MapPin size={18} /> Partager
          </button>
        </div>

        <button onClick={handleStart} className="w-full px-4 py-4 bg-vayrix-blue text-white rounded-lg font-semibold hover:opacity-90 transition">
          Commencer la course
        </button>
      </div>
    </PhoneFrame>
  );
}
