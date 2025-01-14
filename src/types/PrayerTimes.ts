export interface ApiResponse{
    code: number;
    status: string;
    data: Data;
}

export interface Data {
    timings: Timings;
}

export interface Timings {
    Fajr: string;
    Sunrise: string;
    Dhuhr: string;
    Asr: string;
    Sunset: string;
    Maghrib: string;
    Isha: string;
    Imsak: string;
    Midnight: string;
    Firstthird: string;
    Lastthird: string;
}

export interface DateData{
    readable: string;
    hijri: Hijri;
    gregorian: Gregorian;
}

export interface Hijri{
    date: string;
    day: string;
    month: {
        number: number;
        en: string;
        days: number
    };
    year: string;
}

export interface Gregorian {
    date: string;
    day: string;
    weekday: {
        en: string
    };
    month: {
        en: string;
        number: number;
    };
    year: string
}