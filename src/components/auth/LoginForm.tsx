import { Link } from '@tanstack/react-router'

import { useState } from 'react'
import AuthInput from './AuthInput'
import FormHeader from './FormHeader'

export type FormState = {
  email: string
  password: string
}

type LoginFormProps = {
  handleSubmit: (data: FormState) => void
  isLoading?: boolean
}

const LoginForm = ({ handleSubmit, isLoading }: LoginFormProps) => {
  const [input, setInput] = useState<FormState>({
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
        label=" Welcome back"
        title="Sign in to oddBNB"
        subLabel="Continue planning your next unforgettable stay."
      />
      <form className="space-y-6" onSubmit={onSubmit}>
        <div className="space-y-4">
          <AuthInput
            label="Email"
            name="email"
            type="email"
            placeholder="you@email.com"
            autoFocus
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
            placeholder="••••••••"
            value={input.password}
            onChange={(evt) =>
              setInput((prev) => ({
                ...prev,
                [evt.target.name]: evt.target.value,
              }))
            }
          />
        </div>

        <div className="flex items-center justify-between text-sm text-white/60">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="remember"
              className="h-4 w-4 rounded border-white/30 bg-transparent text-white"
            />
            Remember me
          </label>
          <Link
            to="/auth/forgot"
            className="font-semibold text-white/80 hover:text-white"
          >
            Forgot password?
          </Link>
        </div>

        <button
          disabled={isLoading}
          className="w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white/90"
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <p className="text-sm text-white/60">
        New to oddBNB?{' '}
        <Link
          to="/auth/register"
          className="font-semibold text-white hover:text-white/90"
        >
          Create an account
        </Link>
      </p>
    </div>
  )
}

export default LoginForm
