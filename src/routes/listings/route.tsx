import { Outlet, createFileRoute } from '@tanstack/react-router'
import Aurora from '@/components/Aurora'
import UserNavBar from '@/components/UserNavBar'
export const Route = createFileRoute('/listings')({
  component: ListingsLayout,
})

function ListingsLayout() {
  return (
    <div className="min-h-screen w-full">
      <div className="pointer-events-none absolute inset-0 z-0 bg-black">
        <Aurora
          colorStops={['#0b0f2a', '#59f5ff', '#c7ff7a']}
          amplitude={2}
          blend={0.6}
          speed={1}
        />
      </div>

      <Outlet />
    </div>
  )
}
