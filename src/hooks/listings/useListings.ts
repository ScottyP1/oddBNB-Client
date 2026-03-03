import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  createListing,
  getListings,
  getListing,
  updateListing,
} from '@/api/listings.api'
import { useImageUpload } from '../uploads/useImageUpload'
import type { ListingFormState } from '@/types/listing'

export function useListings() {
  return useQuery({
    queryKey: ['listings'],
    queryFn: async () => {
      const res = await getListings()
      return res.data
    },
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 30 * 5,
  })
}

export function useListing(id: string) {
  return useQuery({
    queryKey: ['listing', id],
    queryFn: async () => {
      const res = await getListing(id)
      return res.data
    },
    staleTime: 1000 * 60 * 5,
    enabled: !!id,
  })
}

export function useCreateListingFlow() {
  const queryClient = useQueryClient()
  const { uploadImages } = useImageUpload()

  return useMutation({
    mutationFn: async ({
      form,
      imageFiles,
    }: {
      form: ListingFormState
      imageFiles: File[]
    }) => {
      const uploadedUrls =
        imageFiles.length > 0 ? await uploadImages(imageFiles) : []

      const payload = {
        title: form.title,
        description: form.description,
        location: form.location,
        checkInTime: form.checkInTime,
        checkOutTime: form.checkOutTime,
        available: form.available,
        amenities: form.amenities,

        pricePerNight: Number(form.pricePerNight) || 0,
        lat: Number(form.lat) || 0,
        lon: Number(form.lon) || 0,
        beds: Number(form.beds) || 0,
        baths: Number(form.baths) || 0,
        capacity: Number(form.capacity) || 0,
        squareFeet: Number(form.squareFeet) || 0,

        imageUrls: uploadedUrls,
      }

      const res = await createListing(payload)

      return {
        listing: res.data,
        uploadedUrls,
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['listings'] })
      queryClient.invalidateQueries({ queryKey: ['myListings'] })
    },
  })
}

export function useUpdateListingFlow() {
  const queryClient = useQueryClient()
  const { uploadImages } = useImageUpload()

  return useMutation({
    mutationFn: async ({
      listingId,
      form,
      imageFiles,
    }: {
      listingId: string
      form: ListingFormState
      imageFiles: File[]
    }) => {
      const uploadedUrls =
        imageFiles.length > 0 ? await uploadImages(imageFiles) : []

      const payload = {
        title: form.title,
        description: form.description,
        location: form.location,
        checkInTime: form.checkInTime,
        checkOutTime: form.checkOutTime,
        available: form.available,
        amenities: form.amenities,

        pricePerNight: Number(form.pricePerNight) || 0,
        lat: Number(form.lat) || 0,
        lon: Number(form.lon) || 0,
        beds: Number(form.beds) || 0,
        baths: Number(form.baths) || 0,
        capacity: Number(form.capacity) || 0,
        squareFeet: Number(form.squareFeet) || 0,

        imageUrls: [...(form.imageUrls ?? []), ...uploadedUrls],
      }

      const res = await updateListing(listingId, payload)

      return {
        listing: res.data,
        uploadedUrls,
      }
    },

    onSuccess: (data, variables) => {
      queryClient.setQueryData(
        ['listing', variables.listingId],
        data.listing,
      )
      queryClient.invalidateQueries({ queryKey: ['listings'] })
      queryClient.invalidateQueries({ queryKey: ['myListings'] })
    },
  })
}
