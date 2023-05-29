import { BASIC_CLOUD_IMAGE_URL, DARK_CLOUD_IMAGE_URL, LOADING_IMAGE_URL, NO_IMAGE_URL, SUNNY_IMAGE_URL, SUNNY_WITH_CLOUD_IMAGE_URL } from "@/constants/images-url.constant";
import { RAIN_IMAGE_URL, SNOWY_IMAGE_URL, SUNNY_RAIN_IMAGE_URL, TORNADO_IMAGE_URL, TRUNDER_IMAGE_URL } from "@/constants/images-url.constant";
import { GetImageFromNameParams } from "@/types/utils/get-image-from-name.type";

export function getImageFromName({ id }: GetImageFromNameParams) {
  if (!id) return NO_IMAGE_URL;
  if (id >= 200 && id < 300) return TRUNDER_IMAGE_URL;
  if (id >= 300 && id < 400) return RAIN_IMAGE_URL;
  if (id >= 500 && id < 505) return SUNNY_RAIN_IMAGE_URL;
  if (id === 511) return SNOWY_IMAGE_URL;
  if (id >= 520 && id < 532) return RAIN_IMAGE_URL;
  if (id >= 600 && id < 700) return SNOWY_IMAGE_URL;
  if (id >= 700 && id < 800) return TORNADO_IMAGE_URL;
  if (id === 800) return SUNNY_IMAGE_URL;
  if (id === 801) return SUNNY_WITH_CLOUD_IMAGE_URL;
  if (id === 802) return BASIC_CLOUD_IMAGE_URL;
  if (id === 803 || id === 804) return DARK_CLOUD_IMAGE_URL;
  if (id === 1095) return LOADING_IMAGE_URL;
}