import { api } from './client'

export const createBooking = async (payload: unknown) =>
  await api.post('/bookings', payload)

export const getListingAvailability = async (id: string) =>
  await api.get(`listings/${id}/availability`)

export const getOwnBookings = async () => await api.get('/bookings/user')

export const getHostBookings = async () => await api.get('/bookings/host')

export const updateBookingStatus = async (
  bookingId: string,
  status: 'CONFIRMED' | 'DECLINED',
) => await api.patch(`/bookings/${bookingId}/status`, { status })




