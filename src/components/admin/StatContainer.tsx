import StatCard from './StatCard'

type StatsContainerProps = {
  label: string
  totalValue: number | string
  stats?: Array<{ label: string; value: number | string }>
}
const StatContainer = ({ label, totalValue, stats }: StatsContainerProps) => {
  return (
    <div className="rounded-3xl border border-white/15 bg-black/60 p-6 shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold">{label}</h2>
        <span className="text-xs text-white/50">{totalValue} total</span>
      </div>
      {stats && (
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={`${stat.label}-${stat.value}`}
              label={stat.label}
              value={String(stat.value)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default StatContainer
