import { api } from './client'

export const createBooking = async (payload: unknown) =>
  await api.post('/bookings', payload)

export const getListingBookings = async (id: string) =>
  await api.get(`listings/${id}/bookings`)

export const getOwnBookings = async () => await api.get('/bookings/user')
