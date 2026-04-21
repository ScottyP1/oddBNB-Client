import { useMemo, useState } from 'react'
import { DayPicker, type DateRange } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import {
  useCreateBooking,
  useListingBookings,
} from '@/hooks/bookings/useListingBookings'
type BookingSectionProps = {
  listingId: string
  pricePerNight?: number
}

const BookingSection = ({
  listingId,
  pricePerNight = 0,
}: BookingSectionProps) => {
  const { data: bookings = [] } = useListingBookings(listingId)
  const createBooking = useCreateBooking()

  const [range, setRange] = useState<DateRange | undefined>()
  const [guestCount, setGuestCount] = useState(1)

  const today = new Date()
  const startMonth = new Date(today.getFullYear(), today.getMonth(), 1)
  const endMonth = new Date(today.getFullYear() + 1, 11, 1)

  const bookedRanges = useMemo(() => {
    const parseDate = (value: unknown) => {
      if (!value) return null
      if (value instanceof Date) return value
      if (typeof value === 'string') {
        const normalized = value.length === 10 ? `${value}T00:00:00` : value
        const parsed = new Date(normalized)
        return Number.isNaN(parsed.getTime()) ? null : parsed
      }
      return null
    }

    return bookings
      .map((booking: any) => {
        const rawStart =
          booking.checkInDate ??
          booking.startDate ??
          booking.checkIn ??
          booking.start ??
          booking.check_in
        const rawEnd =
          booking.checkOutDate ??
          booking.endDate ??
          booking.checkOut ??
          booking.end ??
          booking.check_out

        const from = parseDate(rawStart)
        const to = parseDate(rawEnd)
        if (!from || !to) return null

        return from <= to ? { from, to } : { from: to, to: from }
      })
      .filter(Boolean) as DateRange[]
  }, [bookings])

  const formatDate = (date?: Date) =>
    date
      ? date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      : ''

  const totalNights = useMemo(() => {
    if (!range?.from || !range?.to) return 0
    const start = new Date(
      range.from.getFullYear(),
      range.from.getMonth(),
      range.from.getDate(),
    )
    const end = new Date(
      range.to.getFullYear(),
      range.to.getMonth(),
      range.to.getDate(),
    )
    const diffMs = end.getTime() - start.getTime()
    return diffMs > 0 ? Math.ceil(diffMs / (1000 * 60 * 60 * 24)) : 0
  }, [range?.from, range?.to])

  const totalPrice = useMemo(() => {
    if (!totalNights || !pricePerNight) return 0
    return totalNights * pricePerNight
  }, [totalNights, pricePerNight])

  const formatPayloadDate = (date: Date) =>
    date.toISOString().slice(0, 10)

  const handleSubmitReservation = () => {
    if (!range?.from || !range?.to) return
    createBooking.mutate({
      listingId,
      checkIn: formatPayloadDate(range.from),
      checkOut: formatPayloadDate(range.to),
      guestsCount: guestCount,
    })
  }

  return (
    <div className="rounded-3xl border border-white/70 bg-black/30 p-6 shadow-[0_35px_90px_-70px_rgba(15,23,42,0.7)] backdrop-blur flex-1">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold ">Book now</h3>
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-[0.3em] ">
            Select dates
          </span>
          {range?.from && (
            <button
              type="button"
              onClick={() => setRange(undefined)}
              className="rounded-full border border-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:bg-white/10"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/40 p-3">
        <DayPicker
          mode="range"
          selected={range}
          onSelect={setRange}
          disabled={[...bookedRanges, { before: new Date() }]}
          excludeDisabled
          showOutsideDays
          captionLayout="dropdown"
          startMonth={startMonth}
          endMonth={endMonth}
          reverseYears
          numberOfMonths={1}
          className="text-white"
          classNames={{
            months: 'flex flex-col gap-4',
            nav: 'flex items-center justify-between mb-2',
            button_previous:
              'h-8 w-8 rounded-full border border-white/20 text-white/80 hover:bg-white/10',
            button_next:
              'h-8 w-8 rounded-full border border-white/20 text-white/80 hover:bg-white/10',
            month_caption: 'text-sm font-semibold pb-2',
            caption_label: 'hidden',
            dropdowns: 'flex items-center gap-2 mb-2',
            dropdown:
              'rounded-lg border border-white/20 bg-black/60 px-3 py-1 text-xs text-white/90',
            month_grid: 'w-full border-collapse',
            weekdays: 'grid grid-cols-7 mt-2',
            weekday: 'text-[10px] uppercase tracking-[0.2em] text-white/50',
            week: 'grid grid-cols-7',
            day: 'h-7 w-7 text-center',
            day_button:
              'h-7 w-7 rounded-full text-xs font-medium text-white/90 hover:bg-white/10',
            selected: '',
            range_start: '',
            range_end: '',
            range_middle: '',
            disabled:
              'bg-red-500/80 text-white/80 line-through cursor-not-allowed',
            today: 'ring-1 ring-white/30',
          }}
          modifiersClassNames={{
            selected:
              'rounded-full outline outline-2 outline-blue-500 text-white',
            range_start:
              'rounded-full outline outline-2 outline-blue-500 text-white',
            range_end:
              'rounded-full outline outline-2 outline-blue-500 text-white',
            range_middle: 'rounded-full bg-blue-500/40 text-white',
            disabled:
              'rounded-full bg-red-500/80 text-white/80 line-through',
          }}
        />
      </div>

      <div className="mt-4 flex items-center gap-3 text-xs">
        <div className="h-2 w-2 rounded-full bg-blue-900" />
        Selected
        <div className="ml-3 h-2 w-2 rounded-full bg-blue-500" />
        In-between
        <div className="ml-3 h-2 w-2 rounded-full bg-red-500" />
        Unavailable
      </div>

      {range?.from && (
        <div className="mt-6 space-y-3 rounded-2xl border border-white/15 bg-black/50 p-4">
          <div className="grid grid-cols-2 gap-3 text-xs text-white/80">
            <div className="rounded-xl border border-white/10 bg-black/40 px-3 py-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                Check in
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                {formatDate(range.from)}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 px-3 py-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                Check out
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                {range.to ? formatDate(range.to) : 'Select end'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs text-white/80">
            <div className="rounded-xl border border-white/10 bg-black/40 px-3 py-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                Total nights
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                {totalNights || '--'}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 px-3 py-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                Total price
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                {totalPrice ? `$${totalPrice}` : '--'}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-xs text-white/80">
            <span className="uppercase tracking-[0.2em] text-white/50">
              Guests
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setGuestCount((g) => Math.max(1, g - 1))}
                className="h-7 w-7 rounded-full border border-white/20 text-sm"
              >
                -
              </button>
              <span className="min-w-6 text-center text-sm font-semibold text-white">
                {guestCount}
              </span>
              <button
                type="button"
                onClick={() => setGuestCount((g) => g + 1)}
                className="h-7 w-7 rounded-full border border-white/20 text-sm"
              >
                +
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSubmitReservation}
            disabled={!range.to || createBooking.isPending}
            className="w-full rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {createBooking.isPending ? 'Sending...' : 'Request reservation'}
          </button>
        </div>
      )}
    </div>
  )
}

export default BookingSection
