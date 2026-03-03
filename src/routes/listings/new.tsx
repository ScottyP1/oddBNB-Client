import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

import ListingShell from '@/components/listings/ListingShell'
import AmenitiesSection from '@/components/listings/amenities/AmenitiesSection'
import ListingFormFooter from '@/components/listings/listingForm/ListingFormFooter'
import ListingFormBody from '@/components/listings/listingForm/ListingFormBody'
import ListingFormPricing from '@/components/listings/listingForm/ListingFormPricing'

import type {
  ListingFormField,
  ListingFormState,
  ListingFormValue,
} from '@/types/listing'
import ListingFormHeader from '@/components/listings/listingForm/ListingFormHeader'

export const Route = createFileRoute('/listings/new')({
  component: RouteComponent,
})

function RouteComponent() {
  const [form, setForm] = useState<ListingFormState>({
    title: '',
    description: '',
    pricePerNight: '',
    location: '',
    lat: '',
    lon: '',
    beds: '',
    baths: '',
    capacity: '',
    squareFeet: '',
    checkInTime: '',
    checkOutTime: '',
    available: true,
    amenities: [],
  })

  const updateField = (field: ListingFormField, value: ListingFormValue) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const payload = {
      title: form.title,
      description: form.description,
      pricePerNight: Number(form.pricePerNight) || 0,
      location: form.location,
      lat: Number(form.lat) || 0,
      lon: Number(form.lon) || 0,
      beds: Number(form.beds) || 0,
      baths: Number(form.baths) || 0,
      capacity: Number(form.capacity) || 0,
      squareFeet: Number(form.squareFeet) || 0,
      checkInTime: form.checkInTime,
      checkOutTime: form.checkOutTime,
      available: form.available,
      amenities: form.amenities,
    }

    console.log('Create listing payload:', payload)
  }

  return (
    <ListingShell
      infoFullWidth
      header={<ListingFormHeader />}
      gallery={
        <div className="rounded-3xl border border-white/15 bg-black/60 p-6 shadow-2xl backdrop-blur">
          <p className="text-sm font-semibold">Gallery</p>
          <p className="mt-2 text-sm text-white/60">
            Upload high-quality photos that show the space.
          </p>
          <div className="mt-4 flex h-40 items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/5 text-sm text-white/50">
            Drop images here
          </div>
        </div>
      }
      info={
        <ListingFormBody
          form={form}
          onChange={updateField}
          onSubmit={handleSubmit}
        />
      }
      sidebar={
        <ListingFormPricing
          pricePerNight={form.pricePerNight}
          available={form.available}
          onChange={updateField}
        />
      }
      amenities={
        <AmenitiesSection
          variant="form"
          selectedIds={form.amenities}
          onChange={(next) => updateField('amenities', next)}
        />
      }
      footer={<ListingFormFooter />}
    />
  )
}
