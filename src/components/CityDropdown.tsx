import React from "react";
import { useStore } from "../stores/store";
import { getPrayerMonth, getPrayerTimes } from "../utils/getPrayerTimes";

const CityDropdown = () => {
  const { selectedCity, setCity, setPrayerTimes, setPrayerTimeMonthly } =
    useStore();

  const handleCityChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const city = event.target.value;
    setCity(city);
    const times = await getPrayerTimes(city);
    setPrayerTimes(times);
    const timesMonthly = await getPrayerMonth(city);
    setPrayerTimeMonthly(timesMonthly);
  };

  return (
    <div>
      <select value={selectedCity} onChange={handleCityChange}>
        <option value="Jakarta">Jakarta</option>
        <option value="Depok">Depok</option>
        <option value="Bogor">Bogor</option>
        {/* Tambahkan kota lainnya */}
      </select>
    </div>
  );
};

export default CityDropdown;
