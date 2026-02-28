import { Link, createFileRoute } from '@tanstack/react-router'
import SquircleShift from '@/components/SquircleShift'
import InfoPill from '@/components/InfoPill'
import { useMe } from '@/features/auth/useAuth'

export const Route = createFileRoute('/profile')({
  component: ProfilePage,
})

function ProfilePage() {
  const { data: user } = useMe()

  const initials = user?.firstName.slice(0, 1).toUpperCase()

  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
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

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              Profile
            </p>
            <h1 className="text-3xl font-semibold sm:text-4xl">
              Your oddBNB space
            </h1>
          </div>
          <Link
            to="/listings"
            className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10"
          >
            Browse stays
          </Link>
        </header>

        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6 rounded-3xl border border-white/15 bg-black/60 p-6 shadow-2xl backdrop-blur">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-lg font-semibold ring-1 ring-white/20">
                {initials}
              </div>
              <div>
                <p className="text-lg font-semibold">
                  {`${user?.firstName} ${user?.lastName}` || 'Oddbnb Traveler'}
                </p>
                <p className="text-sm text-white/60">
                  {user?.email || 'you@email.com'}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 text-xs text-white/60">
              <InfoPill label="Verified account" />
              <InfoPill label="Since 2024" />
              {user?.role === 'ADMIN' && <InfoPill label="Admin" admin />}
              {user?.role === 'HOST' && <InfoPill label="Host" host />}
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                { label: 'Upcoming trips', value: '2' },
                { label: 'Saved stays', value: '14' },
                { label: 'Reviews', value: '8' },
                { label: 'Wishlist boards', value: '5' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <p className="text-2xl font-semibold">{item.value}</p>
                  <p className="text-xs text-white/60">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/15 bg-black/60 p-6 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Upcoming stay</p>
                  <p className="text-xs text-white/60">Mar 14 - Mar 19</p>
                </div>
                <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
                  Confirmed
                </span>
              </div>
              <div className="mt-4 rounded-2xl bg-gradient-to-br from-sky-500/40 via-emerald-400/20 to-fuchsia-500/30 p-4">
                <p className="text-sm font-semibold">Cliffside A-Frame</p>
                <p className="text-xs text-white/70">Big Sur, CA</p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-black/60 p-6 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Saved collections</p>
                <button className="text-xs font-semibold text-white/70 transition hover:text-white">
                  Manage
                </button>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  'Desert domes',
                  'Lakeside',
                  'Nordic cabins',
                  'Treehouses',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
