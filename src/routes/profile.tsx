import { createFileRoute } from '@tanstack/react-router'

import { useMe } from '@/hooks/auth/useAuth'
import { requireToken } from '@/lib/routeGuards'

import PageContainer from '@/components/PageContainer'
import FavoritesSection from '@/components/profile/FavoritesSection'
import ProfileHeader from '@/components/profile/ProfileHeader'
import ProfileAccountSummary from '@/components/profile/ProfileAccountSummary'
import ProfileUpcomingStays from '@/components/profile/ProfileUpcomingStays'
import HostedListings from '@/components/profile/HostedListings'
import HostPendingBookings from '@/components/profile/HostPendingBookings'
import BecomeHostPanel from '@/components/profile/BecomeHostPanel'

export const Route = createFileRoute('/profile')({
  beforeLoad: () => {
    requireToken()
  },
  component: ProfilePage,
})

function ProfilePage() {
  const { data: user } = useMe()
  const canHost = user?.role === 'HOST' || user?.role === 'ADMIN'
  return (
    <PageContainer>
      <ProfileHeader />
      <section className="flex flex-col gap-4">
        <ProfileAccountSummary user={user} />
        <ProfileUpcomingStays />
        <FavoritesSection />
        {canHost ? <HostPendingBookings /> : <BecomeHostPanel />}
        {canHost ? <HostedListings /> : null}
      </section>
    </PageContainer>
  )
}
