import { Link, useRouterState } from '@tanstack/react-router'

const ProfileHeader = () => {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })

  const navItems = [
    { to: '/profile', label: 'Overview', active: pathname === '/profile' },
    {
      to: '/profile/trips',
      label: 'Trips & stays',
      active: pathname.startsWith('/profile/trips'),
    },
    {
      to: '/profile/hosting',
      label: 'Hosting',
      active: pathname.startsWith('/profile/hosting'),
    },
  ] as const

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
            Profile
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl">
            Your oddBNB space
          </h1>
        </div>
        <Link
          to="/listings"
          className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10"
        >
          Browse stays
        </Link>
      </header>

      <nav className="flex flex-wrap gap-3">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              item.active
                ? 'border-white/40 bg-white text-black'
                : 'border-white/20 bg-white/5 text-white/75 hover:bg-white/10 hover:text-white'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default ProfileHeader
