export type ForecastResponse={
  cod: number,
  list: {
    main: {
      temp:number,
      feels_like: number,
      temp_min:number,
      temp_max:number
    },
    weather: {
      main:string,
      description: string,
      icon:string
    }[],
    dt_txt:string
  }[],
  city:{
    name:string
  }
}
