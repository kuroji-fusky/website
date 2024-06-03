import { google } from "googleapis"

const yt = google.youtube("v3")

const API_KEY = import.meta.env.YT_API_KEY

export const latestVids = yt.playlistItems.list({
  key: API_KEY,
  playlistId: "PLhn3rD7AammVdkwcGMak7v7soUSJ70ehf"
})

export const music = yt.playlistItems.list({
  key: API_KEY,
  playlistId: "PLhn3rD7AammXeDsBMgQU_7L6DDiS9CGp1"
})
