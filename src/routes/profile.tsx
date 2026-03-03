import { createFileRoute } from '@tanstack/react-router'

import { useMe } from '@/hooks/auth/useAuth'

import PageContainer from '@/components/PageContainer'
import FavoritesSection from '@/components/profile/FavoritesSection'
import ProfileHeader from '@/components/profile/ProfileHeader'
import ProfileAccountSummary from '@/components/profile/ProfileAccountSummary'
import ProfileUpcomingStays from '@/components/profile/ProfileUpcomingStays'
import HostedListings from '@/components/profile/HostedListings'

export const Route = createFileRoute('/profile')({
  component: ProfilePage,
})

function ProfilePage() {
  const { data: user } = useMe()

  return (
    <PageContainer>
      <ProfileHeader />
      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <ProfileAccountSummary user={user} />
        <div className="space-y-6">
          <ProfileUpcomingStays />
          <FavoritesSection />
        </div>
      </section>
      <HostedListings />
    </PageContainer>
  )
}
