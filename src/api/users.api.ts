import { api } from './client'

export const getUsers = async () => await api.get(`/users`)
