import type { ChangeEvent, EventHandler } from 'react'

type AuthInputProps = {
  label: string
  name: string
  type: string
  placeholder?: string
  autoFocus?: boolean
  value: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const AuthInput = ({
  label,
  name,
  type,
  placeholder,
  autoFocus,
  value,
  onChange,
}: AuthInputProps) => {
  return (
    <label className="block text-sm font-semibold text-white/70">
      {label}
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onChange={onChange}
        className="mt-2 w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/20"
      />
    </label>
  )
}

export default AuthInput
