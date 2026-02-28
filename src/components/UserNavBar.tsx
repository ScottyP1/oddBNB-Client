import FilterBar from '@/components/FilterBar'
import AuthBtnGroup from '@/components/auth/AuthBtnGroup'
import { Link } from '@tanstack/react-router'

const UserNavBar = () => {
  return (
    <div className="sticky top-0 z-50 text-white">
      <div className="backdrop-blur-md bg-black/40 border-b border-white/10">
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

          <div className="hidden flex-1 md:block">
            <FilterBar />
          </div>

          <div className="ml-auto shrink-0">
            <AuthBtnGroup />
          </div>
        </div>

        {/* Mobile TODO */}
        {/* <div className="mx-auto block max-w-6xl px-4 pb-4 sm:px-6 lg:px-10 md:hidden">
          <FilterBar />
        </div> */}
      </div>
    </div>
  )
}

export default UserNavBar
