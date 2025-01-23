import axios from "axios";
import { ApiResponse } from "../types/PrayerTimes";

// http://api.aladhan.com/v1/calendarByCity/2025/1?city=${city}&country=Indonesia&method=20
export const getPrayerTimes = async (city: string): Promise<any> => {
  const response = await axios.get<ApiResponse>(
    `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=Indonesia&method=20`
  );
  return response.data.data;
};

export const getPrayerMonth = async (city: string): Promise<any> => {
  const response = await axios.get<ApiResponse>(
    `http://api.aladhan.com/v1/calendarByCity/2025/1?city=${city}&country=Indonesia&method=20`
  );
  return response.data.data;
};
