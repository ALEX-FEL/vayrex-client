'use client';
import PhoneFrame from '@/components/vayrix/PhoneFrame';
import { useVayrixStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { mockVehicles, formatFCFA } from '@/lib/mockData';

export default function VehiclePage() {
  const router = useRouter();
  const { setVehicle, setStep } = useVayrixStore();

  const handleSelect = (vehicleId: number) => {
    const vehicle = mockVehicles.find(v => v.id === vehicleId);
    if (vehicle) {
      setVehicle(vehicle);
      setStep(4);
      router.push('/searching');
    }
  };

  return (
    <PhoneFrame>
      <div className="w-full h-full flex flex-col px-6 py-8 gap-4">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-vayrix-muted"><ArrowLeft size={20} /> Retour</button>
        <h1 className="text-3xl font-bold font-syne text-vayrix-text">Choisir le véhicule</h1>
        <div className="flex-1 flex flex-col gap-3 mt-4">
          {mockVehicles.map((vehicle, idx) => (
            <button key={vehicle.id} onClick={() => handleSelect(vehicle.id)} className="p-4 bg-vayrix-surface rounded-lg border border-vayrix-border hover:bg-vayrix-card hover:border-vayrix-blue transition text-left animate-fade-in" style={{animationDelay: `${idx*100}ms`}}>
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{vehicle.icon}</span>
                  <div>
                    <p className="font-medium text-vayrix-text">{vehicle.type}</p>
                    <p className="text-sm text-vayrix-muted">{vehicle.seats}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-vayrix-cyan">{formatFCFA(vehicle.price)}</p>
                  <p className="text-xs bg-vayrix-blue text-white px-2 py-1 rounded mt-1">{vehicle.tag}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}
