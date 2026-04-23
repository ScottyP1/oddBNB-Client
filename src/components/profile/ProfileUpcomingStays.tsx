import { Link } from '@tanstack/react-router'

import { useOwnBookings } from '@/hooks/bookings/useListingBookings'
import type { BookingStatus } from '@/types/booking'
import BookingCard from '../booking/BookingCard'

export type BookingObject = {
  bookingId?: number
  title: string
  checkIn: string
  checkOut: string
  guestsCount: number
  nights: number
  totalPrice: number
  imageUrl: string
  status: BookingStatus
}
const ProfileUpcomingStays = () => {
  const { data: bookings = [], isLoading } = useOwnBookings()

  if (isLoading) return <h2>Loading</h2>

  return (
    <div className="rounded-3xl border border-white/15 bg-black/60 p-6 shadow-2xl backdrop-blur max-h-100 overflow-x-hidden">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">Upcoming stays</p>
        <Link
          to="/profile/trips"
          search={{ tab: 'bookings' }}
          className="text-xs font-semibold text-white/70 transition hover:text-white"
        >
          Manage
        </Link>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {bookings.map((booking: BookingObject) => (
          <BookingCard
            key={booking.bookingId}
            title={booking?.title}
            imageUrl={booking?.imageUrl}
            checkIn={booking?.checkIn}
            checkOut={booking?.checkOut}
            guestsCount={booking?.guestsCount}
            nights={booking?.nights}
            totalPrice={booking?.totalPrice}
            status={booking?.status}
          />
        ))}
      </div>
    </div>
  )
}

export default ProfileUpcomingStays
