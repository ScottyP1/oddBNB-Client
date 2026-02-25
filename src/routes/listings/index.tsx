import { createFileRoute, Link } from '@tanstack/react-router'

import ListingCard from '@/components/ListingCard'

import TemplateCardImg from '/templateCardImg.jpg'
import UserNavBar from '@/components/UserNavBar'

export const Route = createFileRoute('/listings/')({
  component: ListingsPage,
})

const DummyData = [
  {
    id: 1,
    title: 'Home in Space',
    description: 'description',
    pricePerNight: 150,
    location: 'location',
    lat: 120.0,
    lon: 120.0,
    beds: 4,
    baths: 3,
    squareFeet: 1800,
    capacity: 8,
    available: true,
    images: [TemplateCardImg],
    reviews: 4.8,
  },
  {
    id: 2,
    title: 'Home in Space',
    description: 'description',
    pricePerNight: 150,
    location: 'location',
    lat: 120.0,
    lon: 120.0,
    beds: 4,
    baths: 3,
    squareFeet: 1800,
    capacity: 8,
    available: true,
    images: [TemplateCardImg],
    reviews: 4.8,
  },
  {
    id: 3,
    title: 'Home in Space',
    description: 'description',
    pricePerNight: 150,
    location: 'location',
    lat: 120.0,
    lon: 120.0,
    beds: 4,
    baths: 3,
    squareFeet: 1800,
    capacity: 8,
    available: true,
    images: [TemplateCardImg],
    reviews: 4.8,
  },
  {
    id: 4,
    title: 'Home in Space',
    description: 'description',
    pricePerNight: 150,
    location: 'location',
    lat: 120.0,
    lon: 120.0,
    beds: 4,
    baths: 3,
    squareFeet: 1800,
    capacity: 8,
    available: true,
    images: [TemplateCardImg],
    reviews: 4.8,
  },
  {
    id: 5,
    title: 'Home in Space',
    description: 'description',
    pricePerNight: 150,
    location: 'location',
    lat: 120.0,
    lon: 120.0,
    beds: 4,
    baths: 3,
    squareFeet: 1800,
    capacity: 8,
    available: true,
    images: [TemplateCardImg],
    reviews: 4.8,
  },
  {
    id: 6,
    title: 'Home in Space',
    description: 'description',
    pricePerNight: 150,
    location: 'location',
    lat: 120.0,
    lon: 120.0,
    beds: 4,
    baths: 3,
    squareFeet: 1800,
    capacity: 8,
    available: true,
    images: [TemplateCardImg],
    reviews: 4.8,
  },
  {
    id: 7,
    title: 'Home in Space',
    description: 'description',
    pricePerNight: 150,
    location: 'location',
    lat: 120.0,
    lon: 120.0,
    beds: 4,
    baths: 3,
    squareFeet: 1800,
    capacity: 8,
    available: true,
    images: [TemplateCardImg],
    reviews: 4.8,
  },
  {
    id: 8,
    title: 'Home in Space',
    description: 'description',
    pricePerNight: 150,
    location: 'location',
    lat: 120.0,
    lon: 120.0,
    beds: 4,
    baths: 3,
    squareFeet: 1800,
    capacity: 8,
    available: true,
    images: [TemplateCardImg],
    reviews: 4.8,
  },
  {
    id: 9,
    title: 'Home in Space',
    description: 'description',
    pricePerNight: 150,
    location: 'location',
    lat: 120.0,
    lon: 120.0,
    beds: 4,
    baths: 3,
    squareFeet: 1800,
    capacity: 8,
    available: true,
    images: [TemplateCardImg],
    reviews: 4.8,
  },
  {
    id: 10,
    title: 'Home in Space',
    description: 'description',
    pricePerNight: 150,
    location: 'location',
    lat: 120.0,
    lon: 120.0,
    beds: 4,
    baths: 3,
    squareFeet: 1800,
    capacity: 8,
    available: true,
    images: [TemplateCardImg],
    reviews: 4.8,
  },
  {
    id: 11,
    title: 'Home in Space',
    description: 'description',
    pricePerNight: 150,
    location: 'location',
    lat: 120.0,
    lon: 120.0,
    beds: 4,
    baths: 3,
    squareFeet: 1800,
    capacity: 8,
    available: true,
    images: [TemplateCardImg],
    reviews: 4.8,
  },
  {
    id: 12,
    title: 'Home in Space',
    description: 'description',
    pricePerNight: 150,
    location: 'location',
    lat: 120.0,
    lon: 120.0,
    beds: 4,
    baths: 3,
    squareFeet: 1800,
    capacity: 8,
    available: true,
    images: [TemplateCardImg],
    reviews: 4.8,
  },
  {
    id: 13,
    title: 'Home in Space',
    description: 'description',
    pricePerNight: 150,
    location: 'location',
    lat: 120.0,
    lon: 120.0,
    beds: 4,
    baths: 3,
    squareFeet: 1800,
    capacity: 8,
    available: true,
    images: [TemplateCardImg],
    reviews: 4.8,
  },
  {
    id: 14,
    title: 'Home in Space',
    description: 'description',
    pricePerNight: 150,
    location: 'location',
    lat: 120.0,
    lon: 120.0,
    beds: 4,
    baths: 3,
    squareFeet: 1800,
    capacity: 8,
    available: true,
    images: [TemplateCardImg],
    reviews: 4.8,
  },
]

function ListingsPage() {
  return (
    <div className="relative min-h-screen w-full">
      {/* User nav */}
      <UserNavBar />

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
          {DummyData.map((item) => (
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
                images={item.images}
                reviews={item.reviews}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
