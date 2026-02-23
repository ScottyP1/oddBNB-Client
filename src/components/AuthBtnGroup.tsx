import { Link } from '@tanstack/react-router'

const AuthBtnGroup = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} flex gap-4 justify-end items-center`}>
      <Link
        to="/auth/register"
        className="px-12 py-2 bg-linear-to-r from-blue-400 to-gray-300 rounded-lg text-white font-bold"
      >
        Sign up
      </Link>
      <Link
        to="/auth/login"
        className="px-12 py-2 font-bold border border-gray-400 rounded-lg"
      >
        Login
      </Link>
    </div>
  )
}

export default AuthBtnGroup
