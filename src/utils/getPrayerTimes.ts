import axios from "axios";
import { ApiResponse } from "../types/PrayerTimes";
import { ApiResponseMonthly } from "../types/PrayerMonthly";

// http://api.aladhan.com/v1/calendarByCity/2025/1?city=${city}&country=Indonesia&method=20
export const getPrayerTimes = async (city: string): Promise<any> => {
  const response = await axios.get<ApiResponse>(
    `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=Indonesia&method=20`
  );
  return response.data.data;
};

export const getPrayerMonth = async (city: string): Promise<any> => {
  const d = new Date();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  const response = await axios.get<ApiResponseMonthly>(
    `http://api.aladhan.com/v1/calendarByCity/${year}/${month}?city=${city}&country=Indonesia&method=20`
  );
  return response.data.data;
};
