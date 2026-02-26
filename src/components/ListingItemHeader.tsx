import { Heart } from 'lucide-react'

type hostProps = {
  id: number
  firstName: string
  lastName: string
}

const ListingItemHeader = ({ host }: { host: hostProps }) => {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div className="text-sm uppercase tracking-[0.25em]">
        Host: {`${host.firstName} ${host.lastName}`}
      </div>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 px-4 py-2 text-sm font-medium  shadow-sm backdrop-blur hover:bg-white"
      >
        <Heart className="h-4 w-4" />
        Favorite
      </button>
    </div>
  )
}

export default ListingItemHeader
