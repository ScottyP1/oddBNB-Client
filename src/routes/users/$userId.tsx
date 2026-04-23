import { Link, createFileRoute, notFound } from '@tanstack/react-router'

import InfoPill from '@/components/InfoPill'
import PageContainer from '@/components/PageContainer'
import { useAllUsers } from '@/hooks/admin/useAdmin'
import { requireAdminUser } from '@/lib/routeGuards'
import type { User } from '@/types/user'

export const Route = createFileRoute('/users/$userId')({
  beforeLoad: async ({ context }: { context: any }) => {
    await requireAdminUser(context.queryClient)
  },
  component: UserDetailsPage,
})

function UserDetailsPage() {
  const { userId } = Route.useParams()
  const { data: users = [], isLoading } = useAllUsers()

  if (isLoading) {
    return (
      <PageContainer>
        <p className="text-white/70">Loading user account...</p>
      </PageContainer>
    )
  }

  const user = users.find((item: User) => String(item.id) === userId)

  if (!user) {
    throw notFound()
  }

  return (
    <PageContainer>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
            Admin
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl">Manage user</h1>
        </div>
        <Link
          to="/users"
          className="rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
        >
          Back to users
        </Link>
      </div>

      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 rounded-3xl border border-white/15 bg-black/60 p-6 shadow-2xl backdrop-blur">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-lg font-semibold ring-1 ring-white/20">
              {user.firstName.slice(0, 1).toUpperCase()}
            </div>
            <div>
              <p className="text-xl font-semibold">
                {user.name || `${user.firstName} ${user.lastName}`}
              </p>
              <p className="text-sm text-white/60">{user.email}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-white/60">
            <InfoPill label="Verified account" />
            {user.role === 'ADMIN' && <InfoPill label="Admin" admin />}
            {user.role === 'HOST' && <InfoPill label="Host" host />}
            {user.role === 'GUEST' && <InfoPill label="Guest" />}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <DetailCard label="User ID" value={String(user.id)} />
            <DetailCard label="Role" value={user.role} />
            <DetailCard
              label="Bookings"
              value={String(user.bookingIds.length)}
            />
            <DetailCard
              label="Saved stays"
              value={String(user.favoriteIds.length)}
            />
            <DetailCard
              label="Hosted listings"
              value={String(user.hostedListingIds.length)}
            />
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-white/15 bg-black/60 p-6 shadow-2xl backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
            Next admin actions
          </p>
          <p className="text-sm text-white/70">
            This page gives you a real place to inspect an account instead of a
            dead button. If you want, the next step can be role changes, account
            suspension, or a full bookings/listings audit.
          </p>
        </div>
      </section>
    </PageContainer>
  )
}

function DetailCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <p className="text-xs uppercase tracking-[0.2em] text-white/45">{label}</p>
      <p className="mt-2 text-sm font-semibold text-white">{value}</p>
    </div>
  )
}
