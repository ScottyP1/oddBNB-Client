import { api } from './client'

//GET
export const getListings = async () => await api.get('/listings')
export const getListing = async (id: string) => await api.get(`/listings/${id}`)
export const getOwnedListings = async () => await api.get('/listings/owned')

//CREATE
export const createListing = async (payload: unknown) =>
  await api.post('/listings', payload)

//UPDATE

//DELETE
export const deleteListing = async (id: string) => {
  await api.delete(`/listings/${id}`)
}
