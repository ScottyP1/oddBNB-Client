import { BathIcon, BedIcon, MountainIcon, Star } from 'lucide-react'

const ListingInformation = ({
  listingData,
}: {
  listingData: {
    location: string
    title: string
    description: string
    beds: number
    baths: number
    squareFeet: number
    rating: number
    reviewCount: number
  }
}) => {
  const quickFacts = [
    { icon: BedIcon, label: `${listingData.beds} beds` },
    { icon: BathIcon, label: `${listingData.baths} baths` },
    { icon: MountainIcon, label: `${listingData.squareFeet} sq ft` },
    {
      icon: Star,
      label: `${listingData.rating === null ? 'No ratings' : `${listingData.rating} (${listingData.reviewCount})`}`,
    },
  ]

  return (
    <div className="rounded-3xl border border-white/70 bg-black/30 p-6 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.6)] backdrop-blur">
      <h1 className="text-3xl font-semibold  sm:text-4xl">
        {listingData.title}
      </h1>
      <p className="mt-2 text-sm uppercase tracking-[0.2em]">
        {listingData.location}
      </p>
      <p className="mt-4 text-base leading-relaxed">
        {listingData.description}
      </p>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {quickFacts.map((fact) => (
          <div
            key={fact.label}
            className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/80 px-4 py-3 text-sm font-medium "
          >
            <fact.icon className="h-4 w-4" color="black" />
            <span className="text-black">{fact.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListingInformation
