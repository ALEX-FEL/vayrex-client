import { MapPin } from 'lucide-react';

export default function MapPlaceholder() {
  return (
    <div className="w-full h-[240px] relative rounded-lg overflow-hidden border border-vayrix-border bg-[#0f1f35]">
      <svg className="w-full h-full" viewBox="0 0 390 240">
        <defs>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#3B7BE8" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="390" height="240" fill="url(#grid)" />
        <line x1="20" y1="60" x2="370" y2="100" stroke="#3B7BE8" strokeWidth="2" opacity="0.4" />
        <line x1="50" y1="150" x2="350" y2="120" stroke="#3B7BE8" strokeWidth="2" opacity="0.4" />
        <circle cx="60" cy="180" r="8" fill="#22C55E" opacity="0.7" />
        <circle cx="320" cy="60" r="8" fill="#EF4444" opacity="0.7" />
      </svg>
    </div>
  );
}
