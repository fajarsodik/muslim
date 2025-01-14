import { toast } from "react-toastify";
import { useStore } from "../stores/store";

const PrayerTimes = () => {
  const { prayerTimes, isAlarmActive, toggleAlarm } = useStore();

  const alarmNotification = (prayer: string) => {
    if (isAlarmActive) {
      if (Notification.permission === "granted") {
        new Notification(`Waktunya Sholat ${prayer}`, {
            body: `Jangan lupa untuk melaksanakan sholat ${prayer}`,
            // icon: '/icon.png', // Gambar untuk notifikasi (optional)  
        });
      } else {
        toast
      }
    }
  };
};
