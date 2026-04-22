import { API_BASE_URL } from '@/api/client'

export const resolveImageUrl = (url?: string | null) => {
  if (!url) return ''
  if (/^https?:\/\//i.test(url) || url.startsWith('blob:')) return url

  const normalizedBase = API_BASE_URL.endsWith('/')
    ? API_BASE_URL.slice(0, -1)
    : API_BASE_URL

  const normalizedPath = url.startsWith('/') ? url : `/${url}`

  return `${normalizedBase}${normalizedPath}`
}
