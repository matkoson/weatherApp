import axios from "axios";




const API_KEY = "eca6f217b9e2c2978e32bdb520d6bea3";
const ROOT_URL =`https://api.openweathermap.org/data/2.5/forecast?`;
// https://openweathermap.org/data/2.5/forecast?q=London,us&appid=b6907d289e10d714a6e88b30761fae22
// api.openweathermap.org/data/2.5/forecast?q={city name},{country code}

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url= `${ROOT_URL}&q=${city},us&appid=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: "FETCH_WEATHER",
    payload: request
  }
}
