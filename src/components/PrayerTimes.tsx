import React, { useEffect } from "react";
import { useStore } from "../stores/store";
import { toast } from "react-toastify";
import requestNotificationPermission from "../hooks/useNotification";

const PrayerTimes = () => {
  const { prayerTimes, isAlarmActive, toggleAlarm } = useStore();

  const alarmNotification = (prayer: string) => {
    if (isAlarmActive) {
      // Menampilkan notifikasi menggunakan Web Notifications API
      if (Notification.permission === "granted") {
        new Notification(`Waktunya Sholat ${prayer}`, {
          body: `Jangan lupa untuk melaksanakan sholat ${prayer}`,
          icon: "/assets/icon.png", // Gambar untuk notifikasi
        });
      } else {
        toast.info(`Waktunya Sholat ${prayer}`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        });
      }
    }
  };

  useEffect(() => {
    // Meminta izin notifikasi saat komponen pertama kali dimuat
    requestNotificationPermission().then((isGranted) => {
      if (isGranted) {
        console.log("Notifikasi diizinkan!");
      } else {
        console.log("Notifikasi tidak diizinkan!");
      }
    });

    const interval = setInterval(() => {
      const now = new Date();
      const prayerNames = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
      prayerNames.forEach((prayer) => {
        const prayerTime = new Date(prayerTimes[prayer]);
        if (
          prayerTime.getHours() === now.getHours() &&
          prayerTime.getMinutes() === now.getMinutes()
        ) {
          alarmNotification(prayer);
        }
      });
    }, 60000); // periksa setiap menit

    return () => clearInterval(interval);
  }, [prayerTimes, isAlarmActive]);

  return (
    <div>
      <h3>Prayer Times</h3>
      <ul>
        {Object.keys(prayerTimes).map((prayer) => (
          <li key={prayer}>
            {prayer}: {prayerTimes[prayer]}
          </li>
        ))}
      </ul>
      <button onClick={toggleAlarm}>
        {isAlarmActive ? "Stop Alarm" : "Start Alarm"}
      </button>
    </div>
  );
};

export default PrayerTimes;
