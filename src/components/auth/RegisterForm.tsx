import { Link } from '@tanstack/react-router'
import AuthInput from './AuthInput'
import FormHeader from './FormHeader'
import { useState } from 'react'

export type FormState = {
  name: string
  email: string
  password: string
}

type RegisterFormProps = {
  handleSubmit: (data: FormState) => void
  isLoading?: boolean
}

const RegisterForm = ({ handleSubmit, isLoading }: RegisterFormProps) => {
  const [emailLocked, setEmailLocked] = useState(false)
  const [input, setInput] = useState<FormState>({
    name: '',
    email: '',
    password: '',
  })

  const onSubmit = (e: React.SubmitEvent) => {
    e.preventDefault()
    handleSubmit(input)
  }

  return (
    <div className="w-full max-w-md space-y-8">
      <FormHeader
        label="Join oddBNB"
        title="Create your account"
        subLabel=" Save favorites, message hosts, and book in minutes."
      />
      <form className="space-y-6" onSubmit={onSubmit}>
        <div className="space-y-4">
          <AuthInput
            label="Full name"
            name="name"
            type="text"
            placeholder="Avery Walker"
            autoFocus
            value={input.name}
            onChange={(evt) =>
              setInput((prev) => ({
                ...prev,
                [evt.target.name]: evt.target.value,
              }))
            }
          />
          <AuthInput
            label="Email"
            name="email"
            type="email"
            placeholder="you@email.com"
            value={input.email}
            onChange={(evt) =>
              setInput((prev) => ({
                ...prev,
                [evt.target.name]: evt.target.value,
              }))
            }
          />
          <AuthInput
            label="Password"
            name="password"
            type="password"
            value={input.password}
            placeholder="Create a password"
            onChange={(evt) =>
              setInput((prev) => ({
                ...prev,
                [evt.target.name]: evt.target.value,
              }))
            }
          />
        </div>

        <button
          disabled={isLoading}
          className="w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Creating account...' : 'Create account'}
        </button>
      </form>

      <p className="text-sm text-white/60">
        Already have an account?{' '}
        <Link
          to="/auth/login"
          className="font-semibold text-white hover:text-white/90"
        >
          Sign in
        </Link>
      </p>
    </div>
  )
}

export default RegisterForm
