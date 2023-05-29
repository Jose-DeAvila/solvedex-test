import { WeatherInfoGeneralProps } from "@/types/components/organisms/weather-info-general/weather-info-general";
import { ImageStyled, WeatherInfoGeneralStyled } from "./weather-info-general.styled";
import { useMemo } from "react";
import { getImageFromName } from "@/utils/get-image-from-name.util";

export default function WeaterInfoGeneral({ children, imageId }: WeatherInfoGeneralProps) {

  const imageSource = useMemo(() => getImageFromName({ id: imageId }), [imageId]);

  return (
    <WeatherInfoGeneralStyled>
      <ImageStyled src={imageSource} />
      {children}
    </WeatherInfoGeneralStyled>
  )
}