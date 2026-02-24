import AmenitiesList from './AmenitiesList'

const AmenitiesSection = () => {
  return (
    <div className="rounded-3xl border bg-black/30 p-6 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.6)] backdrop-blur lg:col-span-2">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-semibold ">Amenities</h2>
        <span className="text-xs uppercase tracking-[0.25em] ">Included</span>
      </div>

      {/* Amenities List */}
      <AmenitiesList />

      <button
        type="button"
        className="mt-5 gap-2 text-sm font-semibold text-center w-full hover:cursor-pointer"
      >
        View all 30
      </button>
    </div>
  )
}

export default AmenitiesSection
