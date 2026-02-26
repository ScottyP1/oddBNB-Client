import { createFileRoute, Link } from '@tanstack/react-router'
import { useListings } from '@/features/listings/useListings'

import ListingCard from '@/components/ListingCard'

export const Route = createFileRoute('/listings/')({
  component: ListingsPage,
})

type Listing = {
  id: number
  title: string
  pricePerNight: number
  beds: number
  baths: number
  capacity: number
  reviewCount: number
  rating: number | null
  thumbnailUrl?: string
}
function ListingsPage() {
  const { data: listings = [] } = useListings()

  return (
    <div className="relative min-h-screen w-full">
      <section
        className="
          px-4 py-6
          sm:p-8 lg:p-12
          flex flex-col gap-10 sm:gap-20 lg:gap-32
        "
      >
        {/* Listings */}
        <div
          className="
            mx-auto w-full
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            xl:grid-cols-6
            2xl:grid-cols-7
            gap-6 sm:gap-8
          "
        >
          {listings.map((item: Listing) => (
            <Link
              to="/listings/$listingId"
              params={{ listingId: String(item.id) }}
              key={item.id}
            >
              <ListingCard
                title={item.title}
                pricePerNight={item.pricePerNight}
                beds={item.beds}
                baths={item.baths}
                capacity={item.capacity}
                reviews={item.reviewCount}
                images={item.thumbnailUrl ? [item.thumbnailUrl] : []}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
