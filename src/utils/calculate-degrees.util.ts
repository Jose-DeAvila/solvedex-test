import { CalculateDegreesParams } from "@/types/utils/calculate-degrees.type";

export function CalculateDegrees({ degrees, unit }: CalculateDegreesParams): CalculateDegreesParams {
  if (unit === "F") {
    return {
      degrees: Math.round((degrees - 32) * 5 / 9),
      unit: "C"
    }
  } else {
    return {
      degrees: Math.round(degrees * 9 / 5 + 32),
      unit: "F"
    }
  }
}