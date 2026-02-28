import { Link } from '@tanstack/react-router'

const AuthBtnGroup = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} flex gap-4 justify-end items-center`}>
      <Link
        to="/auth/register"
        className="px-4 py-2 md:px-6 rounded-full bg-white text-neutral-900 font-semibold transition hover:bg-white/90"
      >
        Sign up
      </Link>
      <Link
        to="/auth/login"
        className="px-6 py-2 font-semibold border border-white/30 rounded-full text-white/90 transition hover:bg-white/10"
      >
        Login
      </Link>
    </div>
  )
}

export default AuthBtnGroup
