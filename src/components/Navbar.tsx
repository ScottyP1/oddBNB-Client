import { Link } from '@tanstack/react-router'
import { useAuth } from '@/features/auth/auth.context'

import FilterBar from './FilterBar'
import AuthBtnGroup from './auth/AuthBtnGroup'
import UserMenu from './UserMenu'

type NavbarProps = {
  hideAuthActions?: boolean
  showFilterBar?: boolean
}

const Navbar = ({
  hideAuthActions = false,
  showFilterBar = false,
}: NavbarProps) => {
  const { token } = useAuth()

  return (
    <div
      className={`${
        showFilterBar ? 'sticky top-0 z-50' : ''
      } text-white`}
    >
      <div
        className={`${
          showFilterBar ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : ''
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-10">
          <Link to="/listings" className="inline-flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-white/10 ring-1 ring-white/20" />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                oddbnb
              </p>
              <p className="text-sm font-semibold">Stay different</p>
            </div>
          </Link>

          {showFilterBar ? (
            <div className="hidden flex-1 md:block">
              <FilterBar />
            </div>
          ) : (
            <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
              <span>Stays</span>
              <span>Experiences</span>
              <span>Host</span>
              <span>Help</span>
            </nav>
          )}

          {!hideAuthActions && !token && (
            <div className="ml-auto shrink-0">
              <AuthBtnGroup />
            </div>
          )}
          {!hideAuthActions && token && (
            <div className="ml-auto shrink-0">
              <UserMenu />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
