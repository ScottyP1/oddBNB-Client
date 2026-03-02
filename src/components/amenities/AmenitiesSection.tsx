import { useEffect, useState } from 'react'
import AmenitiesList, { type AmenityKey } from './AmenitiesList'

type AmenitiesSectionProps = {
  variant?: 'view' | 'form'
  selectedIds?: AmenityKey[]
  onChange?: (ids: AmenityKey[]) => void
}

const AmenitiesSection = ({
  variant = 'view',
  selectedIds = [],
  onChange,
}: AmenitiesSectionProps) => {
  const isForm = variant === 'form'
  const [selected, setSelected] = useState<AmenityKey[]>(selectedIds)

  useEffect(() => {
    setSelected(selectedIds)
  }, [selectedIds])

  const toggleAmenity = (id: AmenityKey) => {
    setSelected((prev) => {
      const next = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
      onChange?.(next)
      return next
    })
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
      />

      {!isForm && (
        <button
          type="button"
          className="mt-5 gap-2 text-sm font-semibold text-center w-full hover:cursor-pointer"
        >
          View all 30
        </button>
      )}
    </div>
  )
}

export default AmenitiesSection
