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
      <section className="flex flex-col gap-4">
        <ProfileAccountSummary user={user} />
        <ProfileUpcomingStays />
        <FavoritesSection />
        <HostedListings />
      </section>
    </PageContainer>
  )
}
