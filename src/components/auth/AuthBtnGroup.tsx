import { Link } from '@tanstack/react-router'

const AuthBtnGroup = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} flex gap-4 justify-end items-center`}>
      <Link
        to="/auth/register"
        className="px-4 py-2 md:px-6 bg-blue-300 rounded-lg text-white font-bold"
      >
        Sign up
      </Link>
      <Link
        to="/auth/login"
        className="px-6 py-2 font-bold border border-gray-400 rounded-lg"
      >
        Login
      </Link>
    </div>
  )
}

export default AuthBtnGroup
