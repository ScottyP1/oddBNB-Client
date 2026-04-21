import type { AmenityKey } from '@/components/listings/amenities/AmenitiesList'

export type ListingFormState = {
  title: string
  description: string
  pricePerNight: string
  location: string
  lat: string
  lon: string
  beds: string
  baths: string
  capacity: string
  squareFeet: string
  checkInTime: string
  checkOutTime: string
  available: boolean
  amenities: AmenityKey[]
  imageUrls: string[]
}

export type Listing = {
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

export type ListingFormField = keyof ListingFormState
export type ListingFormValue = ListingFormState[ListingFormField]
