import { Link } from '@tanstack/react-router'
import AuthInput from './AuthInput'

const LoginForm = () => {
  return (
    <div className="w-full max-w-md space-y-8">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
          Welcome back
        </p>
        <h1 className="text-3xl font-semibold text-white">Sign in to oddBNB</h1>
        <p className="text-sm text-white/60">
          Continue planning your next unforgettable stay.
        </p>
      </div>

      <form className="space-y-6">
        <div className="space-y-4">
          <AuthInput
            label="Email"
            name="email"
            type="email"
            placeholder="you@email.com"
            autoFocus
          />
          <AuthInput
            label="Password"
            name="password"
            type="password"
            placeholder="••••••••"
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

        <button className="w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white/90">
          Sign in
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
