import { create } from "zustand";

interface Store {
  selectedCity: string;
  prayerTimes: any;
  isAlarmActive: boolean;
  setCity: (city: string) => void;
  setPrayerTimes: (times: Record<string, string>) => void;
  toggleAlarm: () => void;
}

export const useStore = create<Store>((set) => ({
  selectedCity: "Jakarta",
  prayerTimes: {},
  isAlarmActive: false,
  setCity: (city: string) => set({ selectedCity: city }),
  setPrayerTimes: (times: Record<string, string>) =>
    set({ prayerTimes: times }),
  toggleAlarm: () => set((state) => ({ isAlarmActive: !state.isAlarmActive })),
}));
