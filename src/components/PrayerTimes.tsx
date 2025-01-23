import { useEffect } from "react";
import { useStore } from "../stores/store";
// import { toast } from "react-toastify";
import requestNotificationPermission from "../hooks/useNotification";
import {getPrayerTimes} from "../utils/getPrayerTimes";

const PrayerTimes = () => {
  const {
    prayerTimes,
    isAlarmActive,
    // toggleAlarm,
    selectedCity,
    setPrayerTimes,
  } = useStore();

  // const alarmNotification = (prayer: string) => {
  //   if (isAlarmActive) {
  //     // Menampilkan notifikasi menggunakan Web Notifications API
  //     if (Notification.permission === "granted") {
  //       new Notification(`Waktunya Sholat ${prayer}`, {
  //         body: `Jangan lupa untuk melaksanakan sholat ${prayer}`,
  //         icon: "/assets/icon.png", // Gambar untuk notifikasi
  //       });
  //     } else {
  //       toast.info(`Waktunya Sholat ${prayer}`, {
  //         position: toast.POSITION.TOP_CENTER,
  //         autoClose: 5000,
  //       });
  //     }
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      const times = await getPrayerTimes(selectedCity);
      setPrayerTimes(times);
    };
    fetchData();
    // Meminta izin notifikasi saat komponen pertama kali dimuat
    requestNotificationPermission().then((isGranted) => {
      if (isGranted) {
        console.log("Notifikasi diizinkan!");
      } else {
        console.log("Notifikasi tidak diizinkan!");
      }
    });
    const interval = setInterval(() => {}, 60000);

    return () => clearInterval(interval);
  }, [isAlarmActive]);
  if (prayerTimes) {
    if (prayerTimes.timings) {
      return (
        <div>
          <h4>Subuh: {prayerTimes.timings.Fajr}</h4>
          <h4>Dzuhur: {prayerTimes.timings.Dhuhr}</h4>
          <h4>Ashar: {prayerTimes.timings.Asr}</h4>
          <h4>Maghrib: {prayerTimes.timings.Maghrib}</h4>
          <h4>Isya: {prayerTimes.timings.Isha}</h4>
        </div>
      );
    }
    return (
      <div>
        <span className="loading loading-dots loading-md"></span>
      </div>
    );
  }
};

export default PrayerTimes;
