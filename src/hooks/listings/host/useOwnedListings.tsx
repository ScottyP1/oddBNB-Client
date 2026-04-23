import { getOwnedListings } from '@/api/listings.api'
import { useMe } from '@/hooks/auth/useAuth'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteListing } from '@/api/listings.api'
import toast from 'react-hot-toast'
import type { Listing } from '@/types/listing'

export function useOwnedListings() {
  const { data: user } = useMe()
  const userId = user?.id

  return useQuery({
    queryKey: ['myListings', userId],
    enabled: !!userId,
    queryFn: async () => {
      const res = await getOwnedListings()
      return res.data
    },
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 30 * 5,
  })
}

export function useDeleteListing() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteListing,
    onMutate: async (listingId) => {
      await queryClient.cancelQueries({ queryKey: ['myListings'] })
      await queryClient.cancelQueries({ queryKey: ['listings'] })

      const previousOwnedListings = queryClient.getQueriesData<Listing[]>({
        queryKey: ['myListings'],
      })
      const previousListings = queryClient.getQueryData<Listing[]>(['listings'])

      const removeListing = (listings: Listing[] | undefined) =>
        listings?.filter((listing) => String(listing.id) !== listingId) ?? []

      previousOwnedListings.forEach(([queryKey, listings]) => {
        queryClient.setQueryData(queryKey, removeListing(listings))
      })
      queryClient.setQueryData(['listings'], removeListing(previousListings))

      return { previousOwnedListings, previousListings }
    },

    onSuccess: () => {
      toast.success('Listing deleted')
    },

    onError: (_error, _listingId, context) => {
      context?.previousOwnedListings.forEach(([queryKey, listings]) => {
        queryClient.setQueryData(queryKey, listings)
      })
      queryClient.setQueryData(['listings'], context?.previousListings)
      toast.error('Unable to delete listing')
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['myListings'] })
      queryClient.invalidateQueries({ queryKey: ['listings'] })
    },
  })
}
