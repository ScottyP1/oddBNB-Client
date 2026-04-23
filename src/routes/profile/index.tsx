import { createFileRoute } from '@tanstack/react-router'

import { useMe } from '@/hooks/auth/useAuth'

import BecomeHostPanel from '@/components/profile/BecomeHostPanel'
import ProfileAccountSummary from '@/components/profile/ProfileAccountSummary'

export const Route = createFileRoute('/profile/')({
  component: ProfileOverviewPage,
})

function ProfileOverviewPage() {
  const { data: user } = useMe()
  const canHost = user?.role === 'HOST' || user?.role === 'ADMIN'

  return (
    <section className="flex flex-col gap-4">
      {user ? <ProfileAccountSummary user={user} /> : null}
      {!canHost ? <BecomeHostPanel /> : null}
    </section>
  )
}
