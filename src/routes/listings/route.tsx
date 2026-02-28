import { Outlet, createFileRoute } from '@tanstack/react-router'
import SquircleShift from '@/components/SquircleShift'
import Navbar from '@/components/Navbar'

export const Route = createFileRoute('/listings')({
  component: ListingsLayout,
})

function ListingsLayout() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-neutral-950 text-white">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-70">
        <SquircleShift
          width="100%"
          height="100vh"
          speed={0.2}
          brightness={1.05}
          colorLayers={3}
          lightBackground="#050505"
          darkBackground="#050505"
          colorTint="#03a9fc"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-black/70 via-black/40 to-black/90" />
      {/* User nav */}
      <Navbar showFilterBar />
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  )
}
