import StatCard from '../admin/StatCard'
import InfoPill from '../InfoPill'

const ProfileAccountSummary = ({
  user,
}: {
  user: { firstName: string; lastName: string; role: string; email: string }
}) => {
  const initials = user?.firstName.slice(0, 1).toUpperCase()

  return (
    <div className="space-y-6 rounded-3xl border border-white/15 bg-black/60 p-6 shadow-2xl backdrop-blur">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-lg font-semibold ring-1 ring-white/20">
          {initials}
        </div>
        <div>
          <p className="text-lg font-semibold">
            {`${user?.firstName} ${user?.lastName}` || 'Oddbnb Traveler'}
          </p>
          <p className="text-sm text-white/60">
            {user?.email || 'you@email.com'}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 text-xs text-white/60">
        <InfoPill label="Verified account" />
        <InfoPill label="Since 2024" />
        {user?.role === 'ADMIN' && <InfoPill label="Admin" admin />}
        {user?.role === 'HOST' && <InfoPill label="Host" host />}
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        {[
          { label: 'Upcoming trips', value: '2' },
          { label: 'Saved stays', value: '14' },
          { label: 'Reviews', value: '8' },
          { label: 'Wishlist boards', value: '5' },
        ].map((item) => (
          <StatCard label={item.label} value={item.value} key={item.label} />
        ))}
      </div>
    </div>
  )
}

export default ProfileAccountSummary
