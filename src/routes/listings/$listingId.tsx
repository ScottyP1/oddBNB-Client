import { createFileRoute } from '@tanstack/react-router'

import TemplateCardImg from '/templateCardImg.jpg'
import Aurora from '@/components/Aurora'
import UserNavBar from '@/components/UserNavBar'
import AmenitiesSection from '@/components/AmenitiesSection'
import ListingItemHeader from '@/components/ListingItemHeader'
import ListingGallerySection from '@/components/ListingGallerySection'
import ListingInformation from '@/components/ListingInformation'
import ListingReserveSection from '@/components/ListingReserveSection'
import ListingCalender from '@/components/ListingCalender'
import type React from 'react'

export const Route = createFileRoute('/listings/$listingId')({
  component: Listing,
})

const dummyData = {
  id: 7,
  title: 'Home in Space',
  description:
    'Wake up to a horizon of stars in a private, glass-domed retreat. Enjoy modern comforts, panoramic views, and instant access to cosmic trails.',
  pricePerNight: 150,
  location: '1111 West Example Dr, 31243 TD',
  lat: 120.0,
  lon: 120.0,
  beds: 4,
  baths: 3,
  squareFeet: 1800,
  capacity: 8,
  available: true,
  images: [TemplateCardImg, TemplateCardImg, TemplateCardImg, TemplateCardImg],
  reviews: 4.8,
}

function Listing(): React.ReactElement {
  const { listingId } = Route.useParams()

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Aurora
          colorStops={['#0b0f2a', '#59f5ff', '#c7ff7a']}
          amplitude={1.1}
          blend={0.6}
          speed={1}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-white/5 via-white/25 to-white/50" />
      <div className="relative z-20">
        <UserNavBar />
      </div>
      <div className="relative z-20 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-10">
        {/* Host name and favorite btn  */}
        <ListingItemHeader hostName="Host" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <section className="space-y-6">
            {/* Gallery Section */}
            <ListingGallerySection dummyData={dummyData} />

            {/* ListingName, address, description, quick facts */}
            <ListingInformation dummyData={dummyData} />
          </section>

          <aside className="space-y-6 lg:flex lg:flex-col lg:self-stretch">
            {/* reserve a date/time slot */}
            <ListingReserveSection dummyData={dummyData} />

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
