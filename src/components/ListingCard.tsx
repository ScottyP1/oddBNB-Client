import { Star, Heart, BedIcon, BathIcon } from 'lucide-react'

type CardProps = {
  title: string
  pricePerNight: number
  beds: number
  baths: number
  capacity: number
  images: string[]
  reviews: number
}

const ListingCard = ({
  title,
  pricePerNight,
  beds,
  baths,
  capacity,
  images,
  reviews,
}: CardProps) => {
  return (
    <div
      className="
        group relative w-full h-77.5
        rounded-3xl bg-white shadow-lg cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-indigo-500
      "
    >
      {/* Image */}
      <div
        className="
          absolute inset-x-0 top-0 h-[75%]
          rounded-3xl overflow-hidden z-10
          transition-transform duration-300 ease-out
          
          /* Hover only on desktop */
          md:group-hover:-translate-y-12
        "
      >
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover"
        />

        <button
          aria-label="Save listing"
          className="absolute top-3 right-3 h-10 w-10 flex items-center justify-center text-white"
        >
          <Heart size={20} fill="black" />
        </button>
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 px-5 pt-4 pb-5">
        <div className="flex flex-col gap-1 text-sm text-gray-600">
          <span className="flex items-center gap-2">
            <BedIcon size={15} />
            {beds} beds ·
            <BathIcon size={15} />
            {baths} baths
          </span>

          <span>{capacity} guests</span>
        </div>

        <div className="flex flex-col mt-2">
          <h3 className="font-semibold text-lg">{title}</h3>

          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-sm">${pricePerNight} · night</p>

            <div className="flex items-center gap-1">
              <Star size={14} fill="black" />
              {reviews}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingCard
