import type { AmenityKey } from '@/components/amenities/AmenitiesList'

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
}

export type ListingFormField = keyof ListingFormState
export type ListingFormValue = ListingFormState[ListingFormField]
