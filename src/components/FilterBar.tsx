import { LucideSearch } from 'lucide-react'

const FilterBar = () => {
  return (
    <div className="flex justify-between items-center shadow-2xl w-1/2 bg-white rounded-xl px-6 border border-gray-400">
      <div className="flex gap-4 justify-between items-center px-4 py-2">
        <label className="flex flex-col">
          Where
          <input
            placeholder="Search Destinations"
            className="focus:outline-0"
          />
        </label>

        <div className="bg-gray-400 h-8 w-0.5" />

        <label className="flex flex-col">
          When
          <input placeholder="Add Dates" className="focus:outline-0" />
        </label>

        <div className="bg-gray-400 h-8 w-0.5" />

        <label className="flex flex-col">
          Who
          <input placeholder="Add Guests" className="focus:outline-0" />
        </label>
      </div>

      <LucideSearch size={30} className="hover:cursor-pointer" />
    </div>
  )
}

export default FilterBar
