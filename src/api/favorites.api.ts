import { api } from './client'

export const getFavorites = async () => await api.get('/favorites')

export const favorite = async (id: string) => await api.post(`/favorites/${id}`)
