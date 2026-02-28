const FormHeader = ({
  label,
  title,
  subLabel,
}: {
  label: string
  title: string
  subLabel: string
}): React.ReactElement => {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
        {label}
      </p>
      <h1 className="text-3xl font-semibold text-white">{title}</h1>
      <p className="text-sm text-white/60">{subLabel}</p>
    </div>
  )
}

export default FormHeader
