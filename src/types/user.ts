export type User = {
  id: number
  email: string
  firstName: string
  lastName: string
  name?: string
  role: 'GUEST' | 'ADMIN' | 'HOST'
  bookingIds: number[]
  favoriteIds: number[]
  hostedListingIds: number[]
}
