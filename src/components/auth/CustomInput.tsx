type Props = {
  label: string
  name: string
  type: string
  placeholder: string
  autoFocus?: boolean
  className?: string
}

const CustomInput = ({
  label,
  name,
  type,
  placeholder,
  autoFocus,
  className,
}: Props) => {
  return (
    <label>
      {label}
      <input
        autoFocus={autoFocus}
        className={`
  bg-white w-full px-4 py-2 rounded-xl
  placeholder:text-black/50 text-black
  border border-gray-300
  focus:outline-none
  focus:border-blue-500
  focus:ring-2 focus:ring-blue-500/40
  ${className}
`}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </label>
  )
}

export default CustomInput
