const FALLBACK_SITE_URL = "http://localhost:3000"

function toUrl(input: string): URL | null {
  try {
    return new URL(input)
  } catch {
    return null
  }
}

export function getSiteUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (!raw) {
    return new URL(FALLBACK_SITE_URL)
  }

  const direct = toUrl(raw)
  if (direct) {
    return direct
  }

  const withProtocol = toUrl(`https://${raw}`)
  if (withProtocol) {
    return withProtocol
  }

  return new URL(FALLBACK_SITE_URL)
}

export function toAbsoluteUrl(pathname: string): string {
  return new URL(pathname, getSiteUrl()).toString()
}
