import { Link } from '@tanstack/react-router'

const ProfileHeader = () => {
  return (
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
  )
}

export default ProfileHeader
