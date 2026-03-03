import { api } from './client'

export const getListings = async () => await api.get('/listings')

export const getListing = async (id: string) => await api.get(`/listings/${id}`)

export const createListing = async (payload: unknown) =>
  await api.post('/listings', payload)
