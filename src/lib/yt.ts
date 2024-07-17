import { google } from "googleapis"

const yt = google.youtube("v3")
const sheesh = google.sheets("v4")

const API_KEY = import.meta.env.GOOGLE_API_KEY

export const latestTrash = yt.playlistItems.list({
  key: API_KEY,
  playlistId: "PLhn3rD7AammVdkwcGMak7v7soUSJ70ehf"
})
