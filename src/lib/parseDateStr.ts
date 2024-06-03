interface ParseDateStrOptions {
  includeTime?: boolean
}

export const parseDateStr = (dateStr: string, options?: ParseDateStrOptions) => {
  const d = new Date(dateStr)

  const isoDate = d.toISOString()

  const localeLocation = "en-US"
  const localeOptions = {
    month: "short",
    day: "numeric",
    year: "numeric"
  } satisfies Intl.DateTimeFormatOptions

  const readableDate = !options?.includeTime
    ? d.toLocaleDateString(localeLocation, localeOptions)
    : d.toLocaleTimeString(localeLocation, localeOptions)

  return { readableDate, isoDate }
}
