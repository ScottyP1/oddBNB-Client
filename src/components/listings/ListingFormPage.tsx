import { useEffect, useRef, useState } from 'react'
import { useNavigate } from '@tanstack/react-router'

import ListingShell from '@/components/listings/ListingShell'
import AmenitiesSection from '@/components/listings/amenities/AmenitiesSection'
import ListingFormFooter from '@/components/listings/listingForm/ListingFormFooter'
import ListingFormBody from '@/components/listings/listingForm/ListingFormBody'
import ListingFormPricing from '@/components/listings/listingForm/ListingFormPricing'
import ListingFormGallery from '@/components/listings/listingForm/ListingFormGallery'
import ListingFormHeader from '@/components/listings/listingForm/ListingFormHeader'
import ListingCard from '@/components/listings/ListingCard'
import {
  useCreateListingFlow,
  useListing,
  useUpdateListingFlow,
} from '@/hooks/listings/useListings'

import type {
  ListingFormField,
  ListingFormState,
  ListingFormValue,
} from '@/types/listing'

type ListingFormPageProps = {
  mode: 'create' | 'edit'
  listingId?: string
}

const ListingFormPage = ({ mode, listingId }: ListingFormPageProps) => {
  const navigate = useNavigate()
  const isEditing = mode === 'edit'
  const createListingFlow = useCreateListingFlow()
  const updateListingFlow = useUpdateListingFlow()
  const { data: listing } = useListing(isEditing ? (listingId ?? '') : '')
  const hasPrefilled = useRef(false)

  const [imageFiles, setImageFiles] = useState<File[]>([])

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
    imageUrls: [],
  })

  const updateField = (field: ListingFormField, value: ListingFormValue) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (isEditing) {
      if (!listingId) return
      updateListingFlow.mutate({
        listingId,
        form,
        imageFiles,
      })
      return
    }

    createListingFlow.mutate({ form, imageFiles })
  }

  const handleImageSelect = (files: File[]) => {
    if (!files.length) return
    setImageFiles((prev) => [...prev, ...files])
  }

  const handleRemoveImage = (index: number) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleViewNew = () => {
    const newId = createListingFlow.data?.listing?.id
    if (!newId) return
    navigate({ to: `/listings/${newId}` })
  }

  const handleViewUpdated = () => {
    if (!listingId) return
    navigate({ to: `/listings/${listingId}` })
  }

  useEffect(() => {
    hasPrefilled.current = false
  }, [listingId])

  useEffect(() => {
    if (isEditing && listing && !hasPrefilled.current) {
      hasPrefilled.current = true
      setForm({
        title: listing.title ?? '',
        description: listing.description ?? '',
        pricePerNight: String(listing.pricePerNight ?? ''),
        location: listing.location ?? '',
        lat: String(listing.lat ?? ''),
        lon: String(listing.lon ?? ''),
        beds: String(listing.beds ?? ''),
        baths: String(listing.baths ?? ''),
        capacity: String(listing.capacity ?? ''),
        squareFeet: String(listing.squareFeet ?? ''),
        checkInTime: listing.checkInTime ?? '',
        checkOutTime: listing.checkOutTime ?? '',
        available: Boolean(listing.available),
        amenities: listing.amenities ?? [],
        imageUrls: listing.imageUrls ?? [],
      })
    }
  }, [isEditing, listing])

  useEffect(() => {
    if (!isEditing && createListingFlow.isSuccess) {
      setForm({
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
        imageUrls: [],
      })
      setImageFiles([])
    }
  }, [createListingFlow.isSuccess, isEditing])

  return (
    <>
      <ListingShell
        infoFullWidth
        header={<ListingFormHeader isEditing={isEditing} />}
        gallery={
          <ListingFormGallery
            files={imageFiles}
            onSelectFiles={handleImageSelect}
            onRemoveImage={handleRemoveImage}
          />
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
        footer={
          <ListingFormFooter
            disabled={
              isEditing
                ? updateListingFlow.isPending
                : createListingFlow.isPending
            }
            label={
              isEditing
                ? updateListingFlow.isPending
                  ? 'Saving...'
                  : 'Save changes'
                : createListingFlow.isPending
                  ? 'Publishing...'
                  : 'Publish listing'
            }
          />
        }
      />

      {!isEditing && createListingFlow.isPending && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur">
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-white/15 bg-black/80 px-8 py-6 text-white shadow-2xl">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              Publishing
            </p>
            <p className="text-sm text-white/60">Uploading images…</p>
          </div>
        </div>
      )}

      {!isEditing && createListingFlow.isSuccess && createListingFlow.data && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur">
          <div className="relative w-full max-w-2xl rounded-3xl border border-emerald-400/60 bg-black/80 p-8 shadow-[0_0_60px_rgba(16,185,129,0.35)]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                  Success
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Listing published
                </h2>
              </div>
              <button
                type="button"
                onClick={() => createListingFlow.reset()}
                className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white/80 transition hover:bg-white/10"
              >
                Close
              </button>
            </div>

            <div className="mt-6 scale-105">
              <ListingCard
                title={createListingFlow.data.listing.title}
                pricePerNight={createListingFlow.data.listing.pricePerNight}
                images={
                  createListingFlow.data.uploadedUrls.length > 0
                    ? [createListingFlow.data.uploadedUrls[0]]
                    : []
                }
                reviews={0}
                handleViewNew={handleViewNew}
              />
            </div>
          </div>
        </div>
      )}

      {isEditing && updateListingFlow.isSuccess && updateListingFlow.data && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur">
          <div className="relative w-full max-w-2xl rounded-3xl border border-emerald-400/60 bg-black/80 p-8 shadow-[0_0_60px_rgba(16,185,129,0.35)]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                  Success
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Listing updated
                </h2>
              </div>
              <button
                type="button"
                onClick={() => updateListingFlow.reset()}
                className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white/80 transition hover:bg-white/10"
              >
                Close
              </button>
            </div>

            <div className="mt-6 scale-105">
              <ListingCard
                title={form.title}
                pricePerNight={Number(form.pricePerNight) || 0}
                images={form.imageUrls ?? []}
                reviews={0}
                handleViewNew={handleViewUpdated}
                hideFavorite={true}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ListingFormPage
