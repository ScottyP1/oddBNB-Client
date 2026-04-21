import type { BookingObject } from '../profile/ProfileUpcomingStays'

const BookingCard = ({
  title,
  checkIn,
  checkOut,
  guestsCount,
  nights,
  totalPrice,
  status,
  imageUrl,
}: BookingObject) => {
  const formatDate = (value: string | Date) =>
    new Date(value).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    })

  const statusStyles =
    status === 'CONFIRMED'
      ? 'border-emerald-400/50 text-emerald-300 bg-emerald-500/10'
      : status === 'PENDING'
        ? 'border-amber-400/50 text-amber-300 bg-amber-500/10'
        : 'border-rose-400/50 text-rose-300 bg-rose-500/10'

  const statusLabel =
    status === 'CONFIRMED'
      ? 'Accepted'
      : status === 'PENDING'
        ? 'Pending'
        : 'Declined'

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/50 p-4 shadow-lg backdrop-blur">
      <img
        src={imageUrl}
        alt={title}
        className="h-14 w-20 rounded-xl object-cover ring-1 ring-white/10"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">{title}</p>
            <p className="mt-1 text-xs text-white/70">
              {formatDate(checkIn)} – {formatDate(checkOut)}
            </p>
          </div>
          <span
            className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${statusStyles}`}
          >
            {statusLabel}
          </span>
        </div>

        <div className="mt-3 flex items-center gap-4 text-xs text-white/70">
          <span>{guestsCount} guests</span>
          <span>{nights} nights</span>
          <span className="text-white/90">${totalPrice}</span>
        </div>
      </div>
    </div>
  )
}

export default BookingCard
