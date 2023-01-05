export type Forecast = {
  Date: string,
  Temperature: {
    Minimun: {
      Value: number,
      Unit: string
    },
    Maximun: {
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
