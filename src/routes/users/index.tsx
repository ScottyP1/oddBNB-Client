import { createFileRoute } from '@tanstack/react-router'

import { useAllUsers } from '@/hooks/admin/useAdmin'

import type { User } from '@/types/user'
import { useListings } from '@/hooks/listings/useListings'
import PageContainer from '@/components/PageContainer'
import StatContainer from '@/components/admin/StatContainer'

export const Route = createFileRoute('/users/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data: users = [], isLoading, isError } = useAllUsers()
  const { data: listings = [] } = useListings()

  const accountsCount: number = users.length
  const hostingCount: number = users.filter(
    (user: User) => user.role === 'HOST',
  ).length
  const guestCount: number = users.filter(
    (user: User) => user.role === 'GUEST',
  ).length
  const adminCount: number = users.filter(
    (user: User) => user.role === 'ADMIN',
  ).length
  const listingsCount: number = listings.length

  return (
    <PageContainer>
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
            Admin
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl">Users overview</h1>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-white/60">
          <span className="rounded-full border border-white/15 px-3 py-1">
            Updated just now
          </span>
        </div>
      </header>

      {isLoading && <p className="text-white/70">Loading users...</p>}
      {isError && (
        <p className="text-red-400">Unable to load users right now.</p>
      )}
      <div className="flex flex-col gap-6">
        <StatContainer
          label="Accounts"
          totalValue={accountsCount}
          stats={[
            { label: 'Total accounts', value: String(accountsCount) },
            { label: 'Hosting accounts', value: String(hostingCount) },
            { label: 'Guest accounts', value: String(guestCount) },
            { label: 'Admin accounts', value: String(adminCount) },
          ]}
        />
        <StatContainer
          label="Listings"
          totalValue={listingsCount}
          stats={[{ label: 'Total listings', value: String(listingsCount) }]}
        />
        <div className="rounded-3xl border border-white/15 bg-black/60 p-6 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Recent signups</p>
            <button className="text-xs font-semibold text-white/70 transition hover:text-white">
              View all
            </button>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {users.slice(0, 6).map((user: User) => (
              <div
                key={user.id}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <p className="text-sm font-semibold">
                  {user.name || `${user.firstName} ${user.email.split('@')[0]}`}
                </p>
                <p className="text-xs text-white/60">{user.email}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50">
                  {user.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
