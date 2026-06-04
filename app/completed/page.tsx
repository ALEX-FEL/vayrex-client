'use client';
import PhoneFrame from '@/components/vayrix/PhoneFrame';
import { useVayrixStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { Star, CreditCard } from 'lucide-react';
import { useState } from 'react';
import { formatFCFA } from '@/lib/mockData';

export default function CompletedPage() {
  const router = useRouter();
  const { selectedVehicle, rating, setRating, reset } = useVayrixStore();
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'mtn' | 'orange'>('cash');

  const handleComplete = () => {
    reset();
    router.push('/');
  };

  return (
    <PhoneFrame>
      <div className="w-full h-full flex flex-col px-6 py-8 gap-6 animate-slide-up">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-vayrix-success/20 rounded-full flex items-center justify-center">
            <div className="text-3xl">✓</div>
          </div>
          <h1 className="text-2xl font-bold font-syne text-vayrix-text mb-1">Course complétée!</h1>
          <p className="text-vayrix-muted">Merci d&apos;avoir utilisé VAYRIX</p>
        </div>

        <div className="bg-vayrix-surface rounded-lg p-4 border border-vayrix-border space-y-2 text-sm">
          <div className="flex justify-between"><span className="text-vayrix-muted">Distance:</span> <span className="text-vayrix-text">8.5 km</span></div>
          <div className="flex justify-between"><span className="text-vayrix-muted">Durée:</span> <span className="text-vayrix-text">14 min</span></div>
          <div className="h-px bg-vayrix-border my-2"></div>
          <div className="flex justify-between font-semibold"><span className="text-vayrix-text">Total:</span> <span className="text-vayrix-cyan">{formatFCFA(selectedVehicle?.price || 2500)}</span></div>
        </div>

        <div>
          <p className="text-vayrix-muted text-sm mb-3">Évaluer votre chauffeur</p>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} onClick={() => setRating(star)} className="transition-transform hover:scale-110 animate-star-pop" style={{animationDelay: `${star*50}ms`}}>
                <Star size={32} fill={star <= rating ? "#3B7BE8" : "transparent"} stroke={star <= rating ? "#3B7BE8" : "#8896B0"} />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-vayrix-muted text-sm mb-3">Mode de paiement</p>
          <div className="space-y-2">
            {["cash", "mtn", "orange"].map((method) => (
              <label key={method} className="flex items-center gap-3 p-3 bg-vayrix-surface rounded-lg border border-vayrix-border cursor-pointer hover:border-vayrix-blue transition">
                <input type="radio" checked={paymentMethod === method} onChange={() => setPaymentMethod(method as any)} className="w-4 h-4" />
                <span className="font-medium text-vayrix-text capitalize">{method === "mtn" ? "MTN MoMo" : method === "orange" ? "Orange Money" : "Espèces"}</span>
              </label>
            ))}
          </div>
        </div>

        <button onClick={handleComplete} className="w-full px-4 py-3 bg-vayrix-blue text-white rounded-lg font-semibold hover:opacity-90 transition">
          <CreditCard className="inline mr-2" size={18} /> Paiement &amp; Accueil
        </button>
      </div>
    </PhoneFrame>
  );
}
