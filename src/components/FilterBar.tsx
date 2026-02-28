import { LucideSearch } from 'lucide-react'

const FilterBar = () => {
  return (
    <div
      className="
        w-full max-w-3xl mx-auto
        bg-black/50 rounded-2xl border border-white/15 shadow-2xl backdrop-blur
        relative z-50
        flex items-center
        px-4 py-2
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
          <span className="text-xs text-white/50 hidden sm:block">Where</span>
          <input
            placeholder="Search destinations"
            className="focus:outline-none placeholder:text-white/40 text-sm text-white bg-transparent"
          />
        </label>

        {/* Divider */}
        <div className="hidden sm:block bg-white/15 w-px h-8" />

        {/* When section */}
        <label className="flex flex-col sm:px-4">
          <span className="text-xs text-white/50 hidden sm:block">When</span>
          <input
            placeholder="Add dates"
            className="focus:outline-none placeholder:text-white/40 text-sm text-white bg-transparent"
          />
        </label>

        {/* Divider */}
        <div className="hidden sm:block bg-white/15 w-px h-8" />

        {/* Who section */}
        <label className="flex flex-col sm:px-4">
          <span className="text-xs text-white/50 hidden sm:block">Who</span>
          <input
            placeholder="Add guests"
            className="focus:outline-none placeholder:text-white/40 text-sm text-white bg-transparent"
          />
        </label>
      </div>

      {/* Search btn*/}
      <button
        className="
          bg-white text-neutral-900 rounded-full
          h-10 w-10 flex items-center justify-center
          hover:bg-white/90 transition
          self-end sm:self-auto
          hover:cursor-pointer
        "
        aria-label="Search"
      >
        <LucideSearch size={18} />
      </button>
    </div>
  )
}

export default FilterBar
