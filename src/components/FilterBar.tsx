import { LucideSearch } from 'lucide-react'

const FilterBar = () => {
  return (
    <div
      className="
        w-full max-w-3xl mx-auto
        bg-white rounded-xl border border-gray-300 shadow-lg
        
        flex items-center
        px-4 py-2
        
        /* Stack on mobile, row on desktop */
        flex-col sm:flex-row sm:justify-between
        gap-3 sm:gap-0
      "
    >
      {/* Input group */}
      <div
        className="
          flex flex-col sm:flex-row
          w-full
          items-stretch sm:items-center
          gap-2 sm:gap-0
        "
      >
        {/* Where section */}
        <label className="flex flex-col sm:px-4">
          <span className="text-xs text-gray-500 hidden sm:block">Where</span>
          <input
            placeholder="Search destinations"
            className="focus:outline-none"
          />
        </label>

        {/* Divider */}
        <div className="hidden sm:block bg-gray-300 w-px h-8" />

        {/* When section */}
        <label className="flex flex-col sm:px-4">
          <span className="text-xs text-gray-500 hidden sm:block">When</span>
          <input placeholder="Add dates" className="focus:outline-none" />
        </label>

        {/* Divider */}
        <div className="hidden sm:block bg-gray-300 w-px h-8" />

        {/* Who section */}
        <label className="flex flex-col sm:px-4">
          <span className="text-xs text-gray-500 hidden sm:block">Who</span>
          <input placeholder="Add guests" className="focus:outline-none" />
        </label>
      </div>

      {/* Search btn*/}
      <button
        className="
          bg-red-500 text-white rounded-full
          h-10 w-10 flex items-center justify-center
          hover:bg-red-600 transition
          self-end sm:self-auto
        "
        aria-label="Search"
      >
        <LucideSearch size={18} />
      </button>
    </div>
  )
}

export default FilterBar
