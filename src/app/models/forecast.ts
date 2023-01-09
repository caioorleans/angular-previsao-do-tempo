export type Forecast = {
  Date: string,
  Temperature: {
    Minimum: {
      Value: number,
      Unit: string
    },
    Maximum: {
      Value: number,
      Unit: string
    }
  }
  Day: {
    Icon: number,
    IconPhrase: string
  },
  Night: {
    Icon: number,
    IconPhrase: string
  }
}
