import { useQuery } from '@tanstack/react-query'
import { getListings, getListing } from '@/api/listings.api'

export function useListings() {
  return useQuery({
    queryKey: ['listings'],
    queryFn: async () => {
      const res = await getListings()
      return res.data
    },
    staleTime: 1000 * 60 * 5,
  })
}

export function useListing(id: string) {
  return useQuery({
    queryKey: ['listing'],
    queryFn: async () => {
      const res = await getListing(id)
      return res.data
    },
    staleTime: 1000 * 60 * 5,
  })
}
