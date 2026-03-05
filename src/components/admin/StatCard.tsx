const StatCard = ({
  label,
  value,
}: {
  label: string
  value: string | number
}) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <p className="text-2xl font-semibold">{value}</p>
      <p className="text-xs text-white/60">{label}</p>
    </div>
  )
}

export default StatCard
