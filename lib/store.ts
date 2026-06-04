import { create } from 'zustand';
import type { Vehicle, Driver } from './mockData';

export type PaymentMethod = 'cash' | 'mtn' | 'orange';

interface VayrixState {
  currentStep: number;
  selectedVehicle: Vehicle | null;
  selectedDriver: Driver | null;
  destination: string;
  paymentMethod: PaymentMethod;
  tripProgress: number;
  rating: number;
  setStep: (step: number) => void;
  setVehicle: (vehicle: Vehicle | null) => void;
  setDriver: (driver: Driver | null) => void;
  setDestination: (destination: string) => void;
  setPayment: (method: PaymentMethod) => void;
  updateProgress: (progress: number) => void;
  setRating: (rating: number) => void;
  reset: () => void;
}

export const useVayrixStore = create<VayrixState>((set) => ({
  currentStep: 1,
  selectedVehicle: null,
  selectedDriver: null,
  destination: '',
  paymentMethod: 'cash',
  tripProgress: 0,
  rating: 0,
  setStep: (step) => set({ currentStep: step }),
  setVehicle: (vehicle) => set({ selectedVehicle: vehicle }),
  setDriver: (driver) => set({ selectedDriver: driver }),
  setDestination: (destination) => set({ destination }),
  setPayment: (paymentMethod) => set({ paymentMethod }),
  updateProgress: (tripProgress) => set({ tripProgress }),
  setRating: (rating) => set({ rating }),
  reset: () => set({
    currentStep: 1,
    selectedVehicle: null,
    selectedDriver: null,
    destination: '',
    paymentMethod: 'cash',
    tripProgress: 0,
    rating: 0,
  }),
}));
