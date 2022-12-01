import { ForecastMainInfo } from "./forecastMainInfo"
import { Temperature } from "./temperature"
import { Weather } from "./weather"

export type ForecastResponse={
  cod: number,
  list: ForecastMainInfo[],
  city:{
    name:string
  }
}
