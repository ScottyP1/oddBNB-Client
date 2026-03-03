import { Link } from '@tanstack/react-router'
import { useAuth } from '@/features/auth.context'
import { useMe } from '@/hooks/auth/useAuth'

import FilterBar from './FilterBar'
import AuthBtnGroup from './auth/AuthBtnGroup'
import UserMenu from './UserMenu'

import logoImg from '/logo.jpg'

type NavbarProps = {
  hideAuthActions?: boolean
  variant?: 'home' | 'listings' | 'minimal'
}

const Navbar = ({
  hideAuthActions = false,
  variant = 'minimal',
}: NavbarProps) => {
  const { token } = useAuth()
  const { data: user } = useMe()
  const showFilterBar = variant === 'listings'
  const showNavLinks = variant === 'home'
  const showAddListing =
    Boolean(token) && (user?.role === 'ADMIN' || user?.role === 'HOST')
  return (
    <div className="sticky top-0 z-50 text-white">
      <div className="backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-10">
          <Link to="/listings" className="inline-flex items-center gap-3">
            <img
              src={logoImg}
              className="h-10 w-10 rounded-2xl  ring-1 ring-white/20"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                oddbnb
              </p>
              <p className="text-sm font-semibold">Stay different</p>
            </div>
          </Link>

          {showFilterBar && (
            <div className="hidden flex-1 md:block">
              <FilterBar />
            </div>
          )}
          {showNavLinks && (
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
            <div className="ml-auto flex gap-4 items-center">
              <UserMenu />
              {showAddListing && (
                <div className=" hidden lg:flex items-center border-l border-white/10 ">
                  <Link
                    to="/listings/new"
                    className="rounded-full border ml-5  border-white/30 px-4 text-center py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 transition hover:bg-white/10"
                  >
                    <span className="hidden xl:inline">Add listing</span>
                    <span className="inline xl:hidden">+</span>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
