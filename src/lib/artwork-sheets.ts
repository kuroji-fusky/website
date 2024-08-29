import { google } from "googleapis"

const key = import.meta.env.GOOGLE_API_KEY
const sheesh = google.sheets("v4")

const spreadsheetId = "1u0GbPLMf5LJfEoX8iHVYYwDudFtdq2pRC5UMeLNqq-Q"
const options = {
  key,
  spreadsheetId,
  prettyPrint: false
}

const getSheeshData = async (range: string) => {
  const sheetData = await sheesh.spreadsheets.values.get({
    ...options,
    range
  })

  return sheetData.data.values ?? []
}

type Artwork = Array<{
  type: string
  status?: string
  url: string
  characters: string[]
  artist: string
  artistLink?: string
  date: string
  dateComplete?: string
  details?: Partial<{
    platform: string
    priceUSD: string
    pricePHP: string
    [whatever: string]: string
  }>
}>

/* eslint-disable-next-line prefer-const */
let collectedArtworks: Artwork = []

const otherSheeshData = await getSheeshData("Others!A2:E10")
const commissionSheeshData = await getSheeshData("Commissions!A2:J20")

commissionSheeshData.forEach((item) => {
  const [
    type,
    status,
    chars,
    url,
    artist,
    artistLink,
    platform,
    pricePHP,
    priceUSD,
    purchaseDate,
    completeDate
  ] = item

  collectedArtworks.push({
    type,
    status: status ?? "Complete",
    url,
    artist,
    artistLink,
    date: purchaseDate,
    dateComplete: completeDate,
    characters: chars.split(", "),
    details: {
      platform,
      priceUSD,
      pricePHP
    }
  })
})

otherSheeshData.forEach((item) => {
  const [type, chars, url, artist, date] = item

  collectedArtworks.push({
    type,
    artist,
    date,
    url,
    characters: chars.split(", ")
  })
})

const artworkData = collectedArtworks.sort(
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  (a, b) => Date.parse((b as unknown as any).date) - Date.parse((a as unknown as any).date)
)

export default artworkData
