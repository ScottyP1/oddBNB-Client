import { createFileRoute } from '@tanstack/react-router'
import ListingFormPage from '@/components/listings/ListingFormPage'

export const Route = createFileRoute('/listings/new')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ListingFormPage mode="create" />
}
