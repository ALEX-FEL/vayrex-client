export interface Driver {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  plate: string;
  vehicle: string;
  eta: number;
}

export interface Vehicle {
  id: number;
  type: string;
  icon: string;
  seats: string;
  price: number;
  tag: string;
}

export interface Route {
  label: string;
  distance: string;
  duration: string;
}

export const mockDrivers: Driver[] = [
  { id: 1, name: "Jean Paul Mvondo", avatar: "JP", rating: 4.8, plate: "BK 123 AB", vehicle: "Toyota Corolla", eta: 2 },
  { id: 2, name: "Marie Claire Biya", avatar: "MC", rating: 4.9, plate: "LT 456 CD", vehicle: "Hyundai i20", eta: 4 },
];

export const mockVehicles: Vehicle[] = [
  { id: 1, type: "Moto", icon: "🏍", seats: "1 place", price: 1500, tag: "Rapide" },
  { id: 2, type: "Standard", icon: "🚗", seats: "1-4 places", price: 2500, tag: "Recommandé" },
  { id: 3, type: "Premium", icon: "🚐", seats: "1-4 places", price: 4000, tag: "Confort" },
];

export const mockRoutes: Route[] = [
  { label: "Aéroport NSIMALEN", distance: "32 km", duration: "45 min" },
  { label: "Centre Commercial Bastos", distance: "5.2 km", duration: "15 min" },
  { label: "Université de Yaoundé I", distance: "7.8 km", duration: "22 min" },
];

export function formatFCFA(amount: number): string {
  return amount.toLocaleString('fr-FR').replace(/\u202f/g, '\u00a0') + ' FCFA';
}
