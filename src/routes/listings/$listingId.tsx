import { createFileRoute } from '@tanstack/react-router'
import type React from 'react'

import AmenitiesSection from '@/components/listings/amenities/AmenitiesSection'
import ListingItemHeader from '@/components/listings/ListingItemHeader'
import ListingGallerySection from '@/components/listings/ListingGallerySection'
import ListingInformation from '@/components/listings/ListingInformation'
import ListingReserveSection from '@/components/listings/ListingReserveSection'
import ListingCalender from '@/components/listings/ListingCalender'
import ListingShell from '@/components/listings/ListingShell'

import { useListing } from '@/hooks/listings/useListings'

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

  return (
    <ListingShell
      header={<ListingItemHeader host={listing.host} />}
      gallery={<ListingGallerySection imageData={listing.imageUrls} />}
      info={<ListingInformation listingData={listing} />}
      sidebar={
        <>
          <ListingReserveSection
            pricePerNight={listing.pricePerNight}
            capacity={listing.capacity}
            available={listing.available}
            checkInTime={listing.checkInTime}
            checkOutTime={listing.checkOutTime}
          />
          <ListingCalender />
        </>
      }
      amenities={<AmenitiesSection />}
    />
  )
}
