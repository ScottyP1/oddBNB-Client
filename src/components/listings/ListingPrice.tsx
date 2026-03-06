import formatTime from '@/utils/formatTime'

const ListingReserveSection = ({
  pricePerNight,
  capacity,
  available,
  checkInTime,
  checkOutTime,
}: {
  pricePerNight: number
  capacity: number
  available: boolean
  checkInTime: string
  checkOutTime: string
}) => {
  return (
    <div className="flex flex-col rounded-3xl border border-white/70 bg-black/30 p-6 shadow-[0_35px_90px_-70px_rgba(15,23,42,0.7)] backdrop-blur">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm uppercase tracking-[0.3em] ">Nightly</div>
          <div className="text-3xl font-semibold ">${pricePerNight}</div>
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold text-emerald-500">
            {available ? 'Available' : 'Booked'}
          </div>
          <div className="text-xs ">Flexible cancellation</div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="rounded-2xl border border-slate-100 bg-black/30 px-4 py-3 text-sm">
          Check-in: Any time after {formatTime(checkInTime)}
        </div>
        <div className="rounded-2xl border border-slate-100 bg-black/30 px-4 py-3 text-sm">
          Checkout: {formatTime(checkOutTime)}
        </div>
        <div className="rounded-2xl border border-slate-100 bg-black/30 px-4 py-3 text-sm">
          Max guests: {capacity}
        </div>
      </div>
    </div>
  )
}

export default ListingReserveSection
