import { API_KEY, BASE_URL } from "@/constants/base-url.constant";
import { GetCurrentWeatherParams, WeatherInfo } from "@/types/services/get-current-weather.type";

export async function getCurrentWeatherByCity({ city }: GetCurrentWeatherParams): Promise<WeatherInfo | undefined> {
  try {
    const response = await fetch(BASE_URL + `q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error('Error getting current weather by city');
  }
}