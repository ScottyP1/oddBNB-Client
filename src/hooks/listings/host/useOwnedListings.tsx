import { getOwnedListings } from '@/api/listings.api'
import { useMe } from '@/hooks/auth/useAuth'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteListing } from '@/api/listings.api'
import toast from 'react-hot-toast'

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
  })
}

export function useDeleteListing() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteListing,

    onSuccess: () => {
      toast.success('Listing deleted')
      queryClient.invalidateQueries({ queryKey: ['myListings'] })
    },
  })
}
