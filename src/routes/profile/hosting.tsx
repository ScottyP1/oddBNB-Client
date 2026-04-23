import { createFileRoute } from '@tanstack/react-router'

import { useMe } from '@/hooks/auth/useAuth'

import BecomeHostPanel from '@/components/profile/BecomeHostPanel'
import HostedListings from '@/components/profile/HostedListings'
import HostPendingBookings from '@/components/profile/HostPendingBookings'

export const Route = createFileRoute('/profile/hosting')({
  component: ProfileHostingPage,
})

function ProfileHostingPage() {
  const { data: user } = useMe()
  const canHost = user?.role === 'HOST' || user?.role === 'ADMIN'

  return (
    <section className="flex flex-col gap-4">
      {canHost ? (
        <>
          <HostPendingBookings />
          <HostedListings />
        </>
      ) : (
        <BecomeHostPanel />
      )}
    </section>
  )
}
