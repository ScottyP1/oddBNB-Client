import { Outlet, createFileRoute } from '@tanstack/react-router'

import Navbar from '@/components/Navbar'
import InfoPill from '@/components/InfoPill'
import SquircleShift from '@/components/SquircleShift'

export const Route = createFileRoute('/auth')({
  component: AuthLayout,
})

function AuthLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 opacity-70">
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
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/90" />

      {/* Decorations */}
      <img
        src={dotGridImg}
        className="absolute top-0 left-0 z-20 pointer-events-none"
        width={500}
      />
      <img
        src={dotGridImg}
        className="absolute bottom-0 right-0 z-20 pointer-events-none"
        width={500}
      />

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-3xl border border-white/15 bg-black/60 p-8 shadow-2xl backdrop-blur">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
