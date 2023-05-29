import { WeatherInfoCityProps } from "@/types/components/molecules/weather-info.type";
import { WeatherInfoStyled } from "./weather-info-city.styled";
import Button from "@/components/atoms/button/button.component";
import { useMemo, useState } from "react";
import { CalculateDegrees } from "@/utils/calculate-degrees.util";
import { CalculateDegreesParams } from "@/types/utils/calculate-degrees.type";

export default function WeatherInfoCity({ city, degrees }: WeatherInfoCityProps) {

  const [temperatureInfo, setTemperatureInfo] = useState<CalculateDegreesParams>({
    degrees,
    unit: 'C'
  });

  const calculatedTemperatureInfo = useMemo(() => CalculateDegrees(temperatureInfo), [temperatureInfo]);

  const handleClick = () => {
    setTemperatureInfo(calculatedTemperatureInfo);
  }

  return (
    <WeatherInfoStyled>
      <h2 data-test-target="weather-info-city:city-name">{city}</h2>
      <Button onClick={handleClick} type="button" title="Cambiar de medida">
        {temperatureInfo.degrees}°{temperatureInfo.unit}
      </Button>
    </WeatherInfoStyled>
  )
}