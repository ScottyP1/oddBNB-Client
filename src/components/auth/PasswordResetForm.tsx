import { Link } from '@tanstack/react-router'
import AuthInput from './AuthInput'

const PasswordResetForm = () => {
  return (
    <div className="w-full max-w-md space-y-8">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
          Password reset
        </p>
        <h1 className="text-3xl font-semibold text-white">
          Reset your password
        </h1>
        <p className="text-sm text-white/60">
          We will send you a secure reset link.
        </p>
      </div>

      <form className="space-y-6">
        <AuthInput
          label="Email"
          name="email"
          type="email"
          placeholder="you@email.com"
          autoFocus
        />

        <button className="w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white/90">
          Send reset link
        </button>
      </form>

      <p className="text-sm text-white/60">
        Remembered your password?{' '}
        <Link
          to="/auth/login"
          className="font-semibold text-white hover:text-white/90"
        >
          Back to sign in
        </Link>
      </p>
    </div>
  )
}

export default PasswordResetForm
