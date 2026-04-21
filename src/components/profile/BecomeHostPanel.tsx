import { Link } from '@tanstack/react-router'

import { useBecomeHost } from '@/hooks/auth/useAuth'

const BecomeHostPanel = () => {
  const becomeHost = useBecomeHost()

  return (
    <div className="space-y-5 rounded-3xl border border-white/15 bg-black/60 p-6 shadow-2xl backdrop-blur">
      <div className="space-y-2">
        <p className="text-sm font-semibold">Host on oddBNB</p>
        <p className="text-sm text-white/65">
          Turn your account into a host profile so you can publish listings and
          manage guest requests from your dashboard.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          disabled={becomeHost.isPending}
          onClick={() => becomeHost.mutate()}
          className="rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {becomeHost.isPending ? 'Upgrading...' : 'Become a host'}
        </button>
        <Link
          to="/listings"
          className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition hover:bg-white/10 hover:text-white"
        >
          Browse first
        </Link>
      </div>
    </div>
  )
}

export default BecomeHostPanel
