import { Temperature } from "./temperature"
import { Weather } from "./weather"

export type ForecastMainInfo = {
    main: Temperature,
    weather: Weather[],
    dt_txt:string
}
