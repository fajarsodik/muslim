import axios from "axios";
import { ApiResponse } from "../types/PrayerTimes";

const getPrayerTimes = async (city: string): Promise<any> => {
  const response = await axios.get<ApiResponse>(
    `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=Indonesia&method=20`
  );
  return response.data.data;
};

export default getPrayerTimes;
