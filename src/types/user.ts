export type User = {
  id: number
  email: string
  firstName: string
  name: string
  role: 'GUEST' | 'ADMIN' | 'HOST'
}
