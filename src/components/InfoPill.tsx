const InfoPill = ({
  label,
  host,
  admin,
}: {
  label: string
  host?: string | boolean
  admin?: string | boolean
}) => {
  return (
    <span
      className={`rounded-full border border-white/15 px-3 py-1 ${admin && 'bg-yellow-500 text-white px-4 font-bold'} ${host && 'bg-blue-500 text-white px-4 font-bold'}`}
    >
      {label}
    </span>
  )
}

export default InfoPill
