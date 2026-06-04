'use client';
import PhoneFrame from '@/components/vayrix/PhoneFrame';
import { useVayrixStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const { setStep } = useVayrixStore();
  const [isLogin, setIsLogin] = useState(true);

  const handleStart = () => {
    setStep(2);
    router.push('/home');
  };

  return (
    <PhoneFrame>
      <div className="w-full h-full flex flex-col items-center justify-center gap-6 px-6 py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold font-syne text-vayrix-blue mb-2">VAYRIX</h1>
          <p className="text-vayrix-muted text-sm">Transport urbain intelligent</p>
        </div>

        <div className="w-full max-w-xs">
          {isLogin ? (
            <div className="space-y-4 animate-fade-in">
              <input type="email" placeholder="Votre email" className="w-full px-4 py-3 bg-vayrix-surface rounded-lg text-vayrix-text border border-vayrix-border focus:outline-none focus:ring-2 focus:ring-vayrix-blue" />
              <input type="password" placeholder="Mot de passe" className="w-full px-4 py-3 bg-vayrix-surface rounded-lg text-vayrix-text border border-vayrix-border focus:outline-none focus:ring-2 focus:ring-vayrix-blue" />
              <button onClick={handleStart} className="w-full px-4 py-3 bg-vayrix-blue text-white rounded-lg font-medium hover:opacity-90 transition">
                Connecter
              </button>
            </div>
          ) : (
            <div className="space-y-4 animate-fade-in">
              <input type="text" placeholder="Nom complet" className="w-full px-4 py-3 bg-vayrix-surface rounded-lg text-vayrix-text border border-vayrix-border focus:outline-none" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-vayrix-surface rounded-lg text-vayrix-text border border-vayrix-border focus:outline-none" />
              <input type="password" placeholder="Mot de passe" className="w-full px-4 py-3 bg-vayrix-surface rounded-lg text-vayrix-text border border-vayrix-border focus:outline-none" />
              <button onClick={handleStart} className="w-full px-4 py-3 bg-vayrix-blue text-white rounded-lg font-medium hover:opacity-90 transition">
                S&apos;inscrire
              </button>
            </div>
          )}

          <button onClick={() => setIsLogin(!isLogin)} className="w-full mt-3 text-vayrix-muted text-sm hover:text-vayrix-cyan transition">
            {isLogin ? "Pas de compte ? S'inscrire" : "Déjà inscrit ? Se connecter"}
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}
