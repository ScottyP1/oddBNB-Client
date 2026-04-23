import { Outlet, createFileRoute } from '@tanstack/react-router'

import PageContainer from '@/components/PageContainer'
import ProfileHeader from '@/components/profile/ProfileHeader'
import { requireToken } from '@/lib/routeGuards'

export const Route = createFileRoute('/profile')({
  beforeLoad: () => {
    requireToken()
  },
  component: ProfileLayout,
})

function ProfileLayout() {
  return (
    <PageContainer>
      <ProfileHeader />
      <Outlet />
    </PageContainer>
  )
}
