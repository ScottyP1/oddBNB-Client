type AuthInputProps = {
  label: string
  name: string
  type: string
  placeholder?: string
  autoFocus?: boolean
}

const AuthInput = ({
  label,
  name,
  type,
  placeholder,
  autoFocus,
}: AuthInputProps) => {
  return (
    <label className="block text-sm font-semibold text-white/70">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className="mt-2 w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/20"
      />
    </label>
  )
}

export default AuthInput
