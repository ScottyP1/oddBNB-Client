const ProfileUpcomingStays = () => {
  return (
    <div className="rounded-3xl border border-white/15 bg-black/60 p-6 shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold">Upcoming stay</p>
          <p className="text-xs text-white/60">Mar 14 - Mar 19</p>
        </div>
        <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
          Confirmed
        </span>
      </div>
      <div className="mt-4 rounded-2xl bg-linear-to-br from-sky-500/40 via-emerald-400/20 to-fuchsia-500/30 p-4">
        <p className="text-sm font-semibold">Cliffside A-Frame</p>
        <p className="text-xs text-white/70">Big Sur, CA</p>
      </div>
    </div>
  )
}

export default ProfileUpcomingStays
