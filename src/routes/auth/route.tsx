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

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-10">
        <Navbar hideAuthActions />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                Book extraordinary stays
              </p>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Curated retreats for travelers who want the unexpected.
              </h1>
              <p className="max-w-xl text-base text-white/70 sm:text-lg">
                Discover handpicked homes, unique hosts, and a booking flow made
                for explorers.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-white/60">
              <InfoPill label="Flexible cancellation" />
              <InfoPill label="Verified hosts" />
              <InfoPill label="24/7 support" />
            </div>
          </div>

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
