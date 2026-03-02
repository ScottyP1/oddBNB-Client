type ListingInputProps = {
  label: string
  name?: string
  type?: string
  placeholder?: string
  value?: string | number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const ListingInput = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
}: ListingInputProps) => {
  return (
    <label className="text-sm text-white/70">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white/40"
      />
    </label>
  )
}

export default ListingInput
