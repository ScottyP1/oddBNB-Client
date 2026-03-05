import AmenitiesList, { type AmenityKey } from './AmenitiesList'

type AmenitiesSectionProps = {
  variant?: 'view' | 'form'
  selectedIds?: AmenityKey[]
  amenities?: AmenityKey[]
  onChange?: (ids: AmenityKey[]) => void
}

const AmenitiesSection = ({
  variant = 'view',
  selectedIds,
  amenities,
  onChange,
}: AmenitiesSectionProps) => {
  const isForm = variant === 'form'
  const selected = selectedIds ?? []
  const viewAmenities = amenities ?? selected

  const toggleAmenity = (id: AmenityKey) => {
    if (!isForm) return
    const next = selected.includes(id)
      ? selected.filter((item) => item !== id)
      : [...selected, id]
    onChange?.(next)
  }

  return (
    <div className="rounded-3xl border border-white/15 bg-black/60 p-6 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.6)] backdrop-blur lg:col-span-2">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-semibold ">Amenities</h2>
      </div>

      {/* Amenities List */}
      <AmenitiesList
        selectable={isForm}
        selectedIds={selected}
        onToggle={toggleAmenity}
        amenities={isForm ? undefined : viewAmenities}
      />

      {/* {!isForm && (
        <button
          type="button"
          className="mt-5 gap-2 text-sm font-semibold text-center w-full hover:cursor-pointer"
        >
          View all 30
        </button>
      )} */}
    </div>
  )
}

export default AmenitiesSection
