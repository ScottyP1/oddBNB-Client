import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import {
  getListingBookings,
  createBooking,
  getOwnBookings,
} from '@/api/bookings'

import toast from 'react-hot-toast'

export function useListingBookings(id: string) {
  return useQuery({
    queryKey: ['listingBookings', id],
    queryFn: async () => {
      const res = await getListingBookings(id)
      return res.data
    },
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 30 * 5,
  })
}

type CreateBookingPayload = {
  listingId: string | number
  checkIn: string // YYYY-MM-DD
  checkOut: string
  guestsCount: number
}

export function useCreateBooking() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (payload: CreateBookingPayload) => createBooking(payload),

    onSuccess: (_res, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['listingBookings', String(variables.listingId)],
      })
      queryClient.invalidateQueries({
        queryKey: ['ownBookings'],
      })
      toast.success('Booked!')
    },

    onError: (error: any) => {
      const message = error?.response?.data?.message || 'Booking failed'
      toast.error(message)
    },
  })
}

export function useOwnBookings() {
  return useQuery({
    queryKey: ['ownBookings'],
    queryFn: async () => {
      const res = await getOwnBookings()
      return res.data
    },
    staleTime: 1000 * 60 * 5,
  })
}
