import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { favorite, getFavorites } from '@/api/favorites.api'
import toast from 'react-hot-toast'

export function useAddFavorite() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: favorite,

    onMutate: async (listingId: string) => {
      const favorites = queryClient.getQueryData<any[]>(['favorites']) || []

      const wasFavorited = favorites.some(
        (f) => f.listingId === Number(listingId),
      )

      return { wasFavorited }
    },

    onSuccess: (_data, _variables, context) => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] })
      queryClient.invalidateQueries({ queryKey: ['me'] })

      if (context?.wasFavorited) {
        toast.success('Removed from favorites')
      } else {
        toast.success('Added to favorites')
      }
    },

    onError: (error: any) => {
      const msg = error?.response?.data?.message || 'Unable to update favorite'

      toast.error(msg)
    },
  })
}

export function useGetFavorites() {
  return useQuery({
    queryKey: ['favorites'],
    queryFn: async () => {
      const res = await getFavorites()
      return res.data
    },
    staleTime: 1000 * 60 * 5,
  })
}
