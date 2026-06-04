import type { ReactNode } from 'react';

export interface PhoneFrameProps { children: ReactNode; }

export default function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0A0E1A]">
      <div className="relative w-[390px] h-[844px] bg-[#0A0E1A] rounded-[44px] border-[12px] border-gray-900 shadow-2xl overflow-hidden flex flex-col">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[180px] h-[28px] bg-black rounded-b-[40px] z-10"></div>
        <div className="flex-1 overflow-y-auto scrollbar-hide">{children}</div>
      </div>
    </div>
  );
}
