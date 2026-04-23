import { becomeHost, getMe, register, login } from '@/api/auth.api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useAuth } from '@/features/auth.context'

export const meQueryOptions = {
  queryKey: ['me'],
  queryFn: async () => {
    const res = await getMe()
    return res.data
  },
  staleTime: 1000 * 60 * 5,
}

export function useMe() {
  const { token } = useAuth()
  return useQuery({
    ...meQueryOptions,
    enabled: Boolean(token),
  })
}

export function useRegister() {
  const { setToken } = useAuth()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: register,

    onSuccess: (res) => {
      setToken(res.token)
      queryClient.setQueryData(['me'], res.user)
      toast.success('Account created!')
    },

    onError: (error: any) => {
      const message = error?.response?.data || 'Registration failed'

      toast.error(message)
    },
  })
}

export function useLogin() {
  const { setToken } = useAuth()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: login,

    onSuccess: (res) => {
      setToken(res.token)
      queryClient.setQueryData(['me'], res.user)
      toast.success('Logged in!')
    },

    onError: (error: any) => {
      const message = error?.response?.data?.message || error?.response?.data || 'Login failed'
      toast.error(message)
    },
  })
}

export function useBecomeHost() {
  const { token, setToken } = useAuth()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: becomeHost,

    onSuccess: async (res) => {
      // Some backends return a refreshed token on role changes, others only
      // persist the new role server-side. Keep the current token unless a new
      // one is explicitly returned so we do not accidentally log the user out.
      const nextToken = res?.token ?? token

      if (nextToken) {
        setToken(nextToken)
      }

      if (res?.user) {
        queryClient.setQueryData(['me'], res.user)
      }

      await queryClient.invalidateQueries({ queryKey: ['me'] })
      toast.success('You can host now!')
    },

    onError: (error: any) => {
      const message =
        error?.response?.data?.message ||
        error?.response?.data ||
        'Could not upgrade account'
      toast.error(message)
    },
  })
}
