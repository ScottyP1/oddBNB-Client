import { api } from './client'
import type { LoginRequest, RegisterRequest } from '@/types/auth'

export const login = async (data: LoginRequest) =>
  (await api.post('/auth/login', data)).data

export const register = async (data: RegisterRequest) =>
  (await api.post('/auth/register', data)).data

export const becomeHost = async () =>
  (await api.post('/users/me/become-host')).data

export const getMe = async () => await api.get(`/users/me`)
