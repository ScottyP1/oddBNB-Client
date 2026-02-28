import { api } from './client'
import type { LoginRequest, RegisterRequest } from '@/types/auth'

export const login = async (data: LoginRequest) =>
  await api.post('/auth/login', data)

export const register = async (data: RegisterRequest) =>
  await api.post('/auth/register', data)

export const getMe = async () => await api.get(`/users/me`)
