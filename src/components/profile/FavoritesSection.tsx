import { Link } from '@tanstack/react-router'

import {
  useAddFavorite,
  useGetFavorites,
} from '@/features/favorites/useFavorite'
import ListingCard from '@/components/listings/ListingCard'

type FavoriteObject = {
  listingId: number
  location: string
  price: number
  title: string
  imageUrl: string
}

const FavoritesSection = () => {
  const { data: favorites = [] } = useGetFavorites()
  const toggleFavorite = useAddFavorite()

  return (
    <div className="rounded-3xl border border-white/15 bg-black/60 p-6 shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">Saved favorites</p>
        <button className="text-xs font-semibold text-white/70 transition hover:text-white">
          Manage
        </button>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {favorites.length ? (
          favorites.map((item: FavoriteObject) => (
            <Link
              to="/listings/$listingId"
              params={{ listingId: String(item.listingId) }}
              key={item.listingId}
            >
              <ListingCard
                variant="horizontal"
                title={item.title}
                pricePerNight={item.price}
                images={[item.imageUrl]}
                reviews={0}
                isFavorited
                onFavoriteClick={() =>
                  toggleFavorite.mutate(String(item.listingId))
                }
              />
            </Link>
          ))
        ) : (
          <h3 className="text-white/70 text-sm">No listings favorited yet</h3>
        )}
      </div>
    </div>
  )
}

export default FavoritesSection
