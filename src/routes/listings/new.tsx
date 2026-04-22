import { createFileRoute } from '@tanstack/react-router'
import ListingFormPage from '@/components/listings/ListingFormPage'
import { requireHostUser } from '@/lib/routeGuards'

export const Route = createFileRoute('/listings/new')({
  beforeLoad: async ({ context }: { context: any }) => {
    await requireHostUser(context.queryClient)
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <ListingFormPage mode="create" />
}
