import { createFileRoute } from '@tanstack/react-router'

import InfoPill from '@/components/InfoPill'
import { useMe } from '@/hooks/auth/useAuth'

export const Route = createFileRoute('/profile/settings')({
  component: ProfileSettingsPage,
})

function ProfileSettingsPage() {
  const { data: user } = useMe()

  if (!user) {
    return (
      <div className="rounded-3xl border border-white/15 bg-black/60 p-6 shadow-2xl backdrop-blur">
        <p className="text-sm text-white/70">Loading account settings...</p>
      </div>
    )
  }

  return (
    <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6 rounded-3xl border border-white/15 bg-black/60 p-6 shadow-2xl backdrop-blur">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
            Account settings
          </p>
          <h2 className="text-2xl font-semibold">Personal details</h2>
          <p className="text-sm text-white/65">
            This is the place to manage your core account information as we add
            editing flows.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.2em] text-white/45">
              First name
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              {user.firstName}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.2em] text-white/45">
              Last name
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              {user.lastName}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:col-span-2">
            <p className="text-xs uppercase tracking-[0.2em] text-white/45">
              Email
            </p>
            <p className="mt-2 text-sm font-semibold text-white">{user.email}</p>
          </div>
        </div>
      </div>

      <div className="space-y-6 rounded-3xl border border-white/15 bg-black/60 p-6 shadow-2xl backdrop-blur">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
            Status
          </p>
          <h2 className="mt-2 text-xl font-semibold">Account overview</h2>
        </div>

        <div className="flex flex-wrap gap-3 text-xs text-white/60">
          <InfoPill label="Verified account" />
          {user.role === 'ADMIN' && <InfoPill label="Admin" admin />}
          {user.role === 'HOST' && <InfoPill label="Host" host />}
          {user.role === 'GUEST' && <InfoPill label="Guest" />}
        </div>

        <div className="space-y-3 text-sm text-white/70">
          <p>You currently have {user.bookingIds.length} bookings.</p>
          <p>You currently have {user.favoriteIds.length} saved stays.</p>
          <p>You currently have {user.hostedListingIds.length} hosted listings.</p>
        </div>
      </div>
    </section>
  )
}
