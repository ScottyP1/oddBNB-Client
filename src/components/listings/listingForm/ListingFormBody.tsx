import ListingInput from './ListingInput'
import type { ListingFormField, ListingFormState, ListingFormValue } from '@/types/listing'

type ListingFormBodyProps = {
  form: ListingFormState
  onChange: (field: ListingFormField, value: ListingFormValue) => void
  onSubmit: (event: React.FormEvent) => void
}

const ListingFormBody = ({
  form,
  onChange,
  onSubmit,
}: ListingFormBodyProps) => {
  const getLatnLon = () => {
    if (!navigator.geolocation) {
      console.error('Geolocation not supported')
      return
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        onChange('lat', String(position.coords.latitude))
        onChange('lon', String(position.coords.longitude))
      },
      (error) => {
        console.error(error)
      },
    )
  }

  return (
    <form
      id="listing-form"
      onSubmit={onSubmit}
      className="rounded-3xl border border-white/15 bg-black/60 p-6 shadow-2xl backdrop-blur"
    >
      <p className="text-sm font-semibold">Listing details</p>
      <div className="mt-4 grid gap-4">
        <ListingInput
          label="Title"
          value={form.title}
          onChange={(e) => onChange('title', e.target.value)}
        />
        <ListingInput
          label="Location"
          value={form.location}
          onChange={(e) => onChange('location', e.target.value)}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <ListingInput
            label="Latitude"
            value={form.lat}
            onChange={(e) => onChange('lat', e.target.value)}
          />
          <ListingInput
            label="Longitude"
            value={form.lon}
            onChange={(e) => onChange('lon', e.target.value)}
          />
          <button
            type="button"
            onClick={getLatnLon}
            className="mt-2 w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:bg-white/20 sm:col-span-2"
          >
            Get lat &amp; lon
          </button>
        </div>

        <label className="text-sm text-white/70">
          Description
          <textarea
            value={form.description}
            onChange={(e) => onChange('description', e.target.value)}
            className="mt-2 min-h-30 w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white/40"
          />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <ListingInput
            label="Beds"
            value={form.beds}
            type="number"
            onChange={(e) => onChange('beds', e.target.value)}
          />
          <ListingInput
            label="Baths"
            value={form.baths}
            type="number"
            onChange={(e) => onChange('baths', e.target.value)}
          />
          <ListingInput
            label="Capacity"
            value={form.capacity}
            type="number"
            onChange={(e) => onChange('capacity', e.target.value)}
          />
          <ListingInput
            label="Square feet"
            value={form.squareFeet}
            type="number"
            onChange={(e) => onChange('squareFeet', e.target.value)}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm text-white/70">
            Check-in time
            <input
              type="time"
              value={form.checkInTime}
              onChange={(e) => onChange('checkInTime', e.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white/40"
            />
          </label>
          <label className="text-sm text-white/70">
            Check-out time
            <input
              type="time"
              value={form.checkOutTime}
              onChange={(e) => onChange('checkOutTime', e.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white/40"
            />
          </label>
        </div>
      </div>
    </form>
  )
}

export default ListingFormBody
