import { createFileRoute, Link } from '@tanstack/react-router'
import { useListings } from '@/hooks/listings/useListings'

import ListingCard, {
  ListingCardSkeleton,
} from '@/components/listings/ListingCard'
import { useAddFavorite, useGetFavorites } from '@/hooks/favorites/useFavorite'

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
  imageUrl?: string
}
function ListingsPage() {
  const { data: listings = [], isLoading } = useListings()
  const { data: favorites = [] } = useGetFavorites()
  const addFavorite = useAddFavorite()

  const favoritedIds = new Set(favorites.map((f: any) => f.listingId))

  const handleFavorite = (listingId: number) => {
    addFavorite.mutate(String(listingId))
  }

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
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-6 sm:gap-8
          "
        >
          {isLoading
            ? Array.from({ length: 12 }).map((_, index) => (
                <ListingCardSkeleton key={`listing-skeleton-${index}`} />
              ))
            : listings.map((item: Listing) => (
                <Link
                  to="/listings/$listingId"
                  params={{ listingId: String(item.id) }}
                  key={item.id}
                >
                  <ListingCard
                    title={item.title}
                    pricePerNight={item.pricePerNight}
                    reviews={item.reviewCount}
                    images={item.imageUrl ? [item.imageUrl] : []}
                    isFavorited={favoritedIds.has(item.id)}
                    onFavoriteClick={() => handleFavorite(item.id)}
                  />
                </Link>
              ))}
        </div>
      </section>
    </div>
  )
}
