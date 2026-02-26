const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1)
const bookedDays = new Set([7, 8, 14, 21, 22])
const selectedRange = { start: 18, end: 22 }

const ListingCalender = () => {
  return (
    <div className="rounded-3xl border border-white/70 bg-black/30 p-6 shadow-[0_35px_90px_-70px_rgba(15,23,42,0.7)] backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold ">Availability</h3>
        <span className="text-xs uppercase tracking-[0.3em] ">July</span>
      </div>

      <div className="grid grid-cols-7 gap-2 text-xs ">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
          <div key={day} className="text-center">
            {day}
          </div>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-7 gap-2">
        {calendarDays.map((day) => {
          const isBooked = bookedDays.has(day)
          const isSelected =
            day >= selectedRange.start && day <= selectedRange.end
          return (
            <div
              key={day}
              className={`flex h-8 items-center justify-center rounded-full text-xs font-medium ${
                isBooked
                  ? 'bg-slate-200  text-black line-through'
                  : isSelected
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-black'
              }`}
            >
              {day}
            </div>
          )
        })}
      </div>

      <div className="mt-4 flex items-center gap-3 text-xs">
        <div className="h-2 w-2 rounded-full bg-slate-900" />
        Selected range
        <div className="ml-3 h-2 w-2 rounded-full bg-slate-200" />
        Unavailable
      </div>
      <div className="mt-auto pt-6 text-xs ">
        Aligns with the main listing on desktop screens.
      </div>
    </div>
  )
}

export default ListingCalender
