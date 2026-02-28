import { register, login } from '@/api/auth.api'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export function useRegister() {
  return useMutation({
    mutationFn: register,

    onSuccess: (res) => {
      localStorage.setItem('token', res.data.token)
      // (optional) store user
      localStorage.setItem('user', JSON.stringify(res.data.user))
      toast.success('Account created!')
    },

    onError: (error: any) => {
      console.log(error)

      const message =
        error?.response?.data?.message ||
        error?.response?.data?.detail ||
        error?.response?.data?.error ||
        'Registration failed'

      toast.error(message)
    },
  })
}

export function useLogin() {
  return useMutation({
    mutationFn: login,

    onSuccess: (res) => {
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))

      toast.success('Logged in!')
    },

    onError: (error: any) => {
      const message = error?.response?.data?.message || 'Login failed'

      toast.error(message)
    },
  })
}
