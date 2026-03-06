import { createFileRoute } from '@tanstack/react-router'
import ListingFormPage from '@/components/listings/ListingFormPage'

export const Route = createFileRoute('/listings/$listingId/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  const { listingId } = Route.useParams()
  return <ListingFormPage mode="edit" listingId={listingId} />
}
