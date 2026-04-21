import { useMemo } from 'react'

import {
  useHostBookings,
  useUpdateBookingStatus,
} from '@/hooks/bookings/useListingBookings'

const HostPendingBookings = () => {
  const { data: bookings = [], isLoading } = useHostBookings()
  const updateStatus = useUpdateBookingStatus()

  const pendingBookings = useMemo(
    () => bookings.filter((booking) => booking.status === 'PENDING'),
    [bookings],
  )

  if (isLoading) return <h2>Loading</h2>

  return (
    <div className="space-y-6 rounded-3xl border border-white/15 bg-black/60 p-6 shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold">Pending requests</p>
          <p className="mt-1 text-xs text-white/60">
            Accept or decline new reservation requests from guests.
          </p>
        </div>
        <span className="rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-200">
          {pendingBookings.length} pending
        </span>
      </div>

      {pendingBookings.length ? (
        <div className="space-y-4">
          {pendingBookings.map((booking) => (
            <div
              key={booking.bookingId}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/50 p-4 lg:flex-row lg:items-center"
            >
              <img
                src={booking.imageUrl}
                alt={booking.title}
                className="h-24 w-full rounded-2xl object-cover lg:h-20 lg:w-28"
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {booking.title}
                    </p>
                    <p className="mt-1 text-xs text-white/70">
                      {booking.guestFirstName} {booking.guestLastName} requested{' '}
                      {booking.nights} nights for ${booking.totalPrice}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                    {booking.guestsCount} guests
                  </span>
                </div>
                <p className="mt-3 text-xs text-white/60">
                  {new Date(booking.checkIn).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}{' '}
                  -{' '}
                  {new Date(booking.checkOut).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  disabled={updateStatus.isPending}
                  onClick={() =>
                    updateStatus.mutate({
                      bookingId: booking.bookingId,
                      listingId: booking.listingId,
                      status: 'CONFIRMED',
                    })
                  }
                  className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200 transition hover:bg-emerald-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Accept
                </button>
                <button
                  type="button"
                  disabled={updateStatus.isPending}
                  onClick={() =>
                    updateStatus.mutate({
                      bookingId: booking.bookingId,
                      listingId: booking.listingId,
                      status: 'DECLINED',
                    })
                  }
                  className="rounded-full border border-rose-400/40 bg-rose-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-200 transition hover:bg-rose-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Decline
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-white/65">
          No pending requests right now.
        </p>
      )}
    </div>
  )
}

export default HostPendingBookings
