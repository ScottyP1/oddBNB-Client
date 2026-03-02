import ListingInput from './ListingInput'
import type { ListingFormField, ListingFormValue } from '@/types/listing'

type ListingFormPricingProps = {
  pricePerNight: string
  available: boolean
  onChange: (field: ListingFormField, value: ListingFormValue) => void
}

const ListingFormPricing = ({
  pricePerNight,
  available,
  onChange,
}: ListingFormPricingProps) => {
  return (
    <div className="rounded-3xl border border-white/15 bg-black/60 p-6 shadow-2xl backdrop-blur">
      <p className="text-sm font-semibold">Pricing & availability</p>

      <div className="mt-4 grid gap-4">
        <ListingInput
          label="Price per night"
          value={pricePerNight}
          type="number"
          onChange={(e) => onChange('pricePerNight', e.target.value)}
        />

        <label className="flex items-center gap-2 text-sm text-white/70">
          <input
            type="checkbox"
            checked={available}
            onChange={(e) => onChange('available', e.target.checked)}
            className="h-4 w-4"
          />
          Available now
        </label>
      </div>
    </div>
  )
}

export default ListingFormPricing
