export type BookingStatus = 'CONFIRMED' | 'PENDING' | 'DECLINED' | 'CANCELLED'

export type Booking = {
  bookingId: number
  listingId: number
  guestId: number
  title: string
  guestFirstName: string
  guestLastName: string
  checkIn: string
  checkOut: string
  guestsCount: number
  nights: number
  totalPrice: number
  imageUrl: string
  status: BookingStatus
  message?: string | null
}

export type BookingAvailability = {
  checkIn: string
  checkOut: string
}
