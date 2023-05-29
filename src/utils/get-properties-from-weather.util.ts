import { returnedData } from "@/types/services/get-current-weather.type";
import { GetPropertiesFromWeatherParams } from "@/types/utils/get-properties-from-weather.type";

export function getPropertiesFromWeather({ weather }: GetPropertiesFromWeatherParams): returnedData | null {
  if (!weather || weather === undefined) return null;
  if (weather.cod === '400') return null;
  else {
    const { main: { temp }, weather: weatherInfo, wind: { speed }, name } = weather;

    return {
      city: name,
      degrees: Math.floor(temp),
      mainWeather: weatherInfo[0].main,
      windSpeed: speed,
      weatherId: weatherInfo[0].id
    }
  }
}