import { createFileRoute } from '@tanstack/react-router'
import { useAllUsers } from '@/features/admin/useAdmin'

import ApplicationStats from '@/components/admin/applicationStats'

export const Route = createFileRoute('/users/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data, isLoading, isError } = useAllUsers()

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-6 py-10 text-white">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              Admin
            </p>
            <h1 className="text-3xl font-semibold sm:text-4xl">App overview</h1>
          </div>
        </header>

        {isLoading && <p className="text-white/70">Loading users...</p>}
        {isError && (
          <p className="text-red-400">Unable to load users right now.</p>
        )}
        {!isLoading && !isError && <ApplicationStats users={data} />}
    </div>
  )
}
