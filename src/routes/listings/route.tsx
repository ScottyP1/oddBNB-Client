import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/listings')({
  component: ListingsLayout,
})

function ListingsLayout() {
  return (
    <div className="relative min-h-screen w-full text-white">
      <Outlet />
    </div>
  )
}
