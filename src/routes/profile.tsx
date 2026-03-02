import { Link, createFileRoute } from '@tanstack/react-router'

import InfoPill from '@/components/InfoPill'
import { useMe } from '@/features/auth/useAuth'
import PageContainer from '@/components/PageContainer'
import StatCard from '@/components/admin/StatCard'

import FavoritesSection from '@/components/profile/FavoritesSection'

export const Route = createFileRoute('/profile')({
  component: ProfilePage,
})

function ProfilePage() {
  const { data: user } = useMe()

  const initials = user?.firstName.slice(0, 1).toUpperCase()

  return (
    <PageContainer>
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
              <StatCard
                label={item.label}
                value={item.value}
                key={item.label}
              />
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
            <div className="mt-4 rounded-2xl bg-linear-to-br from-sky-500/40 via-emerald-400/20 to-fuchsia-500/30 p-4">
              <p className="text-sm font-semibold">Cliffside A-Frame</p>
              <p className="text-xs text-white/70">Big Sur, CA</p>
            </div>
          </div>

          <FavoritesSection />
        </div>
      </section>
    </PageContainer>
  )
}
