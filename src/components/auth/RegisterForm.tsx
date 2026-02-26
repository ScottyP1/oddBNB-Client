import { Link } from '@tanstack/react-router'
import AuthInput from './AuthInput'

const RegisterForm = () => {
  return (
    <div className="w-full max-w-md space-y-8">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
          Join oddBNB
        </p>
        <h1 className="text-3xl font-semibold text-white">
          Create your account
        </h1>
        <p className="text-sm text-white/60">
          Save favorites, message hosts, and book in minutes.
        </p>
      </div>

      <form className="space-y-6">
        <div className="space-y-4">
          <AuthInput
            label="Full name"
            name="name"
            type="text"
            placeholder="Avery Walker"
            autoFocus
          />
          <AuthInput
            label="Email"
            name="email"
            type="email"
            placeholder="you@email.com"
          />
          <AuthInput
            label="Password"
            name="password"
            type="password"
            placeholder="Create a password"
          />
        </div>

        <button className="w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white/90">
          Create account
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
