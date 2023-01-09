export type CurrentConditions = {
  WeatherText: string,
  WeatherIcon: number,
  Temperature: {
    Metric: {
      Value:number | null,
      Unit:string
    }
  },
  RealFeelTemperature: {
    Metric: {
      Value:number | null,
      Unit:string
    }
  }
}
