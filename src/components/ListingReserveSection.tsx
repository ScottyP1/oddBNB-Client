const ListingReserveSection = ({
  dummyData,
}: {
  dummyData: { pricePerNight: number; capacity: number }
}) => {
  return (
    <div className="flex flex-col rounded-3xl border border-white/70 bg-black/30 p-6 shadow-[0_35px_90px_-70px_rgba(15,23,42,0.7)] backdrop-blur lg:flex-1">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm uppercase tracking-[0.3em] ">Nightly</div>
          <div className="text-3xl font-semibold ">
            ${dummyData.pricePerNight}
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold text-emerald-500">
            Available
          </div>
          <div className="text-xs ">Flexible cancellation</div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="rounded-2xl border border-slate-100 bg-black/30 px-4 py-3 text-sm">
          Check-in: Any time after 3:00 PM
        </div>
        <div className="rounded-2xl border border-slate-100 bg-black/30 px-4 py-3 text-sm">
          Checkout: 11:00 AM
        </div>
        <div className="rounded-2xl border border-slate-100 bg-black/30 px-4 py-3 text-sm">
          Max guests: {dummyData.capacity}
        </div>
      </div>

      <button
        type="button"
        className="mt-6 w-full rounded-2xl bg-slate-900 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-slate-900/30 hover:bg-slate-800"
      >
        Reserve
      </button>
    </div>
  )
}

export default ListingReserveSection
