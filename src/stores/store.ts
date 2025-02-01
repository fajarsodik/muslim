import { create } from "zustand";

interface Store {
  selectedCity: string;
  prayerTimes: any;
  prayerTimeMonthly: any;
  isAlarmActive: boolean;
  setCity: (city: string) => void;
  setPrayerTimes: (times: Record<string, string>) => void;
  setPrayerTimeMonthly: (times: Record<string, string>) => void;
  toggleAlarm: () => void;
}

export const useStore = create<Store>((set) => ({
  selectedCity: "Jakarta",
  prayerTimes: {},
  prayerTimeMonthly: {},
  isAlarmActive: false,
  setCity: (city: string) => set({ selectedCity: city }),
  setPrayerTimes: (times: Record<string, string>) =>
    set({ prayerTimes: times }),
  setPrayerTimeMonthly: (times: Record<string, string>) => 
    set({ prayerTimeMonthly: times }),
  toggleAlarm: () => set((state) => ({ isAlarmActive: !state.isAlarmActive })),
}));
