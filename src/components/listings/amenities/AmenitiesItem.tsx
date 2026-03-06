type Props = {
  title: string
  subtitle?: string
  icon: React.ReactNode
  selectable?: boolean
  selected?: boolean
  onToggle?: () => void
}

const AmenitiesItem = ({
  title,
  subtitle,
  icon,
  selectable = false,
  selected = false,
  onToggle,
}: Props) => {
  const baseClasses =
    'flex w-full items-center gap-4 rounded-2xl border px-4 py-3 text-left transition'
  const viewClasses = 'border-white/10 bg-black/30'
  const selectedClasses = 'border-emerald-400/60 bg-emerald-400/15'
  const interactiveClasses = selectable ? 'hover:bg-white/10' : ''

  const content = (
    <>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-white">{title}</div>
        <div className="text-xs text-white/60">{subtitle}</div>
      </div>
    </>
  )

  if (selectable) {
    return (
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={selected}
        className={`${baseClasses} ${selected ? selectedClasses : viewClasses} ${interactiveClasses}`}
      >
        {content}
      </button>
    )
  }

  return <div className={`${baseClasses} ${viewClasses}`}>{content}</div>
}

export default AmenitiesItem
