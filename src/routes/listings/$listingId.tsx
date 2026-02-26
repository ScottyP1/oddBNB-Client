import { createFileRoute } from '@tanstack/react-router'
import type React from 'react'

import AmenitiesSection from '@/components/AmenitiesSection'
import ListingItemHeader from '@/components/ListingItemHeader'
import ListingGallerySection from '@/components/ListingGallerySection'
import ListingInformation from '@/components/ListingInformation'
import ListingReserveSection from '@/components/ListingReserveSection'
import ListingCalender from '@/components/ListingCalender'

import { useListing } from '@/features/listings/useListings'

export const Route = createFileRoute('/listings/$listingId')({
  component: Listing,
})

function Listing(): React.ReactElement {
  const {
    data: listing,
    isLoading,
    error,
  } = useListing(Route.useParams().listingId)

  if (isLoading) return <h1>Loading</h1>
  console.log(listing)
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-white/5 via-white/25 to-white/50" />
      <div className="relative z-20 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-10">
        {/* Host name and favorite btn  */}
        <ListingItemHeader host={listing.host} />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <section className="space-y-6">
            {/* Gallery Section */}
            <ListingGallerySection imageData={listing.imageUrls} />

            {/* ListingName, address, description, quick facts */}
            <ListingInformation listingData={listing} />
          </section>

          <aside className="space-y-6 lg:flex lg:flex-col lg:self-stretch">
            {/* reserve a date/time slot */}
            <ListingReserveSection
              pricePerNight={listing.pricePerNight}
              capacity={listing.capacity}
              available={listing.available}
              checkInTime={listing.checkInTime}
              checkOutTime={listing.checkOutTime}
            />
            {/* Showcase available days */}
            <ListingCalender />
          </aside>

          {/* Amenities Section */}
          <AmenitiesSection />
        </div>
      </div>
    </div>
  )
}
