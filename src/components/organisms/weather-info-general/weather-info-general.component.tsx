import { ImageStyled, WeatherInfoGeneralStyled } from "./weather-info-general.styled";
import { useMemo } from "react";
import { getImageFromName } from "@/utils/get-image-from-name.util";
import { WeatherInfoGeneralProps } from "@/types/components/organisms/weather-info-general.type";

export default function WeaterInfoGeneral({ children, imageId }: WeatherInfoGeneralProps) {

  const imageSource = useMemo(() => getImageFromName({ id: imageId }), [imageId]);

  return (
    <WeatherInfoGeneralStyled>
      <ImageStyled src={imageSource} />
      {children}
    </WeatherInfoGeneralStyled>
  )
}