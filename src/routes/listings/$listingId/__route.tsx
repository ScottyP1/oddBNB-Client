import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/listings/$listingId/__route')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
