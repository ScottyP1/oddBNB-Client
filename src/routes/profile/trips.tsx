import { Link, createFileRoute } from '@tanstack/react-router'

import FavoritesSection from '@/components/profile/FavoritesSection'
import ProfileUpcomingStays from '@/components/profile/ProfileUpcomingStays'

type TripsTab = 'bookings' | 'saved'

export const Route = createFileRoute('/profile/trips')({
  validateSearch: (search: Record<string, unknown>) => {
    const tab = search.tab

    return {
      tab: tab === 'saved' ? 'saved' : 'bookings',
    } satisfies { tab: TripsTab }
  },
  component: ProfileTripsPage,
})

function ProfileTripsPage() {
  const { tab } = Route.useSearch()

  const tabs: Array<{ label: string; value: TripsTab }> = [
    { label: 'Bookings', value: 'bookings' },
    { label: 'Saved', value: 'saved' },
  ]

  return (
    <section className="flex flex-col gap-4">
      <div className="rounded-3xl border border-white/15 bg-black/60 p-4 shadow-2xl backdrop-blur">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">Trips & stays</p>
            <p className="mt-1 text-sm text-white/60">
              Switch between your booked stays and the places you have saved for
              later.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tabs.map((item) => (
              <Link
                key={item.value}
                to="/profile/trips"
                search={{ tab: item.value }}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  tab === item.value
                    ? 'border-white/40 bg-white text-black'
                    : 'border-white/20 bg-white/5 text-white/75 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {tab === 'bookings' ? <ProfileUpcomingStays /> : <FavoritesSection />}
    </section>
  )
}
