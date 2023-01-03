export type City = {
  Key: number,
  LocalizedName: string,
  Country: {
    ID: string,
    LocalizedName: string
  },
  AdministrativeArea: {
    ID: string,
    LocalizedName: string
  }
}
