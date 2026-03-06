import { Link, useNavigate } from '@tanstack/react-router'

import {
  useOwnedListings,
  useDeleteListing,
} from '@/hooks/listings/host/useOwnedListings'

import ListingCard from '../listings/ListingCard'

type listingObject = {
  id: number
  imageUrl: string
  title: string
  pricePerNight: number
}

const HostedListings = () => {
  const { data: ownedListings = [], isLoading } = useOwnedListings()
  const navigate = useNavigate()

  const deleteListing = useDeleteListing()
  const handleDelete = (listingId: number) => {
    deleteListing.mutate(String(listingId))
  }

  if (isLoading) return <h1>Loading</h1>
  return (
    <div className="space-y-6 rounded-3xl border border-white/15 bg-black/60 p-6 shadow-2xl backdrop-blur">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2>Hosted Listings</h2>
        <Link
          to="/listings/new"
          className="rounded-full border border-white/30 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/90 transition hover:bg-white/10 sm:ml-5"
        >
          Add Listing
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {ownedListings.length ? (
          ownedListings.map((listing: listingObject) => (
            <ListingCard
              key={listing.id}
              title={listing.title}
              pricePerNight={listing.pricePerNight}
              images={[listing.imageUrl]}
              reviews={0}
              hideFavorite={true}
              showDelete={true}
              showEdit={true}
              onCardClick={() =>
                navigate({
                  to: '/listings/$listingId',
                  params: { listingId: String(listing.id) },
                })
              }
              onDeleteClick={() => handleDelete(listing.id)}
              onEditClick={() =>
                navigate({
                  to: '/listings/$listingId/edit',
                  params: { listingId: String(listing.id) },
                })
              }
            />
          ))
        ) : (
          <span className="text-white/70">You have no listings</span>
        )}
      </div>
    </div>
  )
}

export default HostedListings
