import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import {
  getListingAvailability,
  createBooking,
  getOwnBookings,
  getHostBookings,
  updateBookingStatus,
} from '@/api/bookings'
import type { Booking } from '@/types/booking'

import toast from 'react-hot-toast'

export function useListingBookings(id: string) {
  return useQuery({
    queryKey: ['listingBookings', id],
    queryFn: async () => {
      const res = await getListingAvailability(id)
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
      toast.success('Request sent to host')
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

export function useHostBookings() {
  return useQuery({
    queryKey: ['hostBookings'],
    queryFn: async () => {
      const res = await getHostBookings()
      return res.data as Booking[]
    },
    staleTime: 1000 * 60 * 2,
  })
}

export function useUpdateBookingStatus() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      bookingId,
      status,
    }: {
      bookingId: number | string
      listingId: number | string
      status: 'CONFIRMED' | 'DECLINED'
    }) => updateBookingStatus(String(bookingId), status),

    onSuccess: (_res, variables) => {
      queryClient.invalidateQueries({ queryKey: ['hostBookings'] })
      queryClient.invalidateQueries({ queryKey: ['ownBookings'] })
      queryClient.invalidateQueries({
        queryKey: ['listingBookings', String(variables.listingId)],
      })
      toast.success(
        variables.status === 'CONFIRMED'
          ? 'Booking accepted'
          : 'Booking declined',
      )
    },

    onError: (error: any) => {
      const message =
        error?.response?.data?.message ||
        error?.response?.data ||
        'Could not update booking'
      toast.error(message)
    },
  })
}
