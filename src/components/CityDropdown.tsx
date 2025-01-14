import React, { useEffect } from "react";
import { useStore } from "../stores/store";
import getPrayerTimes from "../utils/getPrayerTimes";

const CityDropdown = () => {
  const { selectedCity, setCity, setPrayerTimes } = useStore();

  const handleCityChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const city = event.target.value;
    setCity(city);
    const times = await getPrayerTimes(city);
    setPrayerTimes(times);
  }

  return (
    <div>
        <select value="{selectedCity}" onChange="{handleCityChange}">
            <option value="Jakarta">Jakarta</option>
            <option value="Bogor">Bogor</option>
            <option value="Depok">Depok</option>
        </select>
    </div>
  );
};

export default CityDropdown;