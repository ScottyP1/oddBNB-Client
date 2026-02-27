type Props = {
  title: string
  subtitle: string
  icon: React.ReactNode
}

const AmenitiesItem = ({ title, subtitle, icon }: Props) => {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-black/30 px-4 py-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs">{subtitle}</div>
      </div>
    </div>
  )
}

export default AmenitiesItem
