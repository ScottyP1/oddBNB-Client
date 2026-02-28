import { getMe, register, login } from '@/api/auth.api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useAuth } from '@/features/auth/auth.context'

export function useMe() {
  const { token } = useAuth()
  return useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      const res = await getMe()
      return res.data
    },
    enabled: Boolean(token),
    staleTime: 1000 * 60 * 5,
  })
}

export function useRegister() {
  const { setToken } = useAuth()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: register,

    onSuccess: (res) => {
      setToken(res.data.token)
      queryClient.setQueryData(['me'], res.data.user)
      toast.success('Account created!')
    },

    onError: (error: any) => {
      const message = error?.response?.data?.message || 'Registration failed'

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
      setToken(res.data.token)
      queryClient.setQueryData(['me'], res.data.user)

      toast.success('Logged in!')
    },

    onError: (error: any) => {
      const message = error?.response?.data?.message || 'Login failed'

      toast.error(message)
    },
  })
}
