import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

import FilterBar from '@/components/FilterBar'
import AuthBtnGroup from '@/components/AuthBtnGroup'
import ListingCard from '@/components/ListingCard'

import TemplateCardImg from '/templateCardImg.jpg'

export const Route = createFileRoute('/dashboard')({
  component: DashboardPage,
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
]

function DashboardPage() {
  return (
    <div className="relative min-h-screen w-full bg-linear-to-t from-gray-500 to-white">
      <section
        className="
          px-4 py-6
          sm:p-8 lg:p-12
          flex flex-col gap-10 sm:gap-20 lg:gap-32
        "
      >
        {/* Header */}
        <div className="relative flex items-center">
          <h1 className="text-2xl font-bold tracking-widest">ODDBNB</h1>

          <div
            className="
      absolute left-1/2 -translate-x-1/2
      w-full max-w-3xl px-4
      hidden sm:block
    "
          >
            <FilterBar />
          </div>

          <div className="ml-auto">
            <AuthBtnGroup />
          </div>
        </div>

        <div className="sm:hidden mt-4">
          <FilterBar />
        </div>

        {/* Listings */}
        <div
          className="
            mx-auto w-full
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            xl:grid-cols-6
            gap-6 sm:gap-8
          "
        >
          {DummyData.map((item) => (
            <ListingCard
              key={item.id}
              title={item.title}
              pricePerNight={item.pricePerNight}
              beds={item.beds}
              baths={item.baths}
              capacity={item.capacity}
              images={item.images}
              reviews={item.reviews}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
