import { getCurrentWeatherByCity } from "@/services/get-current-weather";
import { GetCurrentWeatherParams, returnedData } from "@/types/services/get-current-weather.type";
import { getPropertiesFromWeather } from "@/utils/get-properties-from-weather.util";
import { useCallback, useEffect, useState } from "react";

export function useWeather({ city }: GetCurrentWeatherParams) {
  const [weather, setWeather] = useState<returnedData | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getWeather = useCallback(async () => {
    try {
      const response = await getCurrentWeatherByCity({ city });

      return getPropertiesFromWeather({ weather: response });
    } catch (error: unknown) {
      setError("An error has ocurred!");
    }
  }, [city]);

  useEffect(() => {
    setLoading(true);
    setWeather(null);
    setError('');

    if (!city) {
      setError('Please enter a city');
      setLoading(false);
      setWeather(null);
      return;
    }

    getWeather().then((response) => {
      if (!response) {
        setError('City not found');
      } else {
        setWeather(response);
      }
      setLoading(false);
    });
  }, [getWeather, city]);



  return {
    loading,
    error,
    weatherInfo: weather
  }
}