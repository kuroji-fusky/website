import type { APIRoute } from "astro"
import { google } from "googleapis"

const key = import.meta.env.GOOGLE_API_KEY
const sheesh = google.sheets("v4")

const options = {
  key,
  spreadsheetId: "1u0GbPLMf5LJfEoX8iHVYYwDudFtdq2pRC5UMeLNqq-Q",
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
  artist: {
    name: string
    link: string
  }
  date: {
    purchase: string
    purchaseISO: string
    complete: string
    completeISO: string
  }
  details?: Partial<{
    platform: string
    priceUSD: string
    pricePHP: string
    notes: string
  }>
}>

export const GET: APIRoute = async () => {
  /* eslint-disable-next-line prefer-const */
  let collectedArtworks: Artwork = []

  const otherSheeshData = await getSheeshData("Others!A2:E10")
  const commissionSheeshData = await getSheeshData("Commissions!A2:X20")

  commissionSheeshData.forEach((item) => {
    // prettier-ignore
    const [type, status, chars, url, artistName, artistLink, platform, pricePHP, priceUSD, purchaseDate, completeDate, notes] = item

    collectedArtworks.push({
      type,
      status: status ?? "Complete",
      url,
      artist: {
        name: artistName,
        link: artistLink
      },
      date: {
        purchase: purchaseDate,
        purchaseISO: purchaseDate ? "" : new Date(purchaseDate).toISOString(),
        complete: !completeDate ? "" : completeDate,
        completeISO: !completeDate ? "" : new Date(completeDate).toISOString()
      },
      characters: chars.split(", "),
      details: {
        platform,
        priceUSD,
        pricePHP,
        notes
      }
    })
  })

  otherSheeshData.forEach((item) => {
    const [type, chars, url, artistName, date] = item

    collectedArtworks.push({
      type,
      artist: {
        link: "",
        name: artistName
      },
      date,
      url,
      characters: chars.split(", ")
    })
  })

  const artworkData = collectedArtworks.sort(
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    (a, b) => Date.parse((b as unknown as any).date) - Date.parse((a as unknown as any).date)
  )

  return new Response(JSON.stringify(artworkData), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  })
}
