import FilterBar from '@/components/FilterBar'
import AuthBtnGroup from '@/components/auth/AuthBtnGroup'
import { Link } from '@tanstack/react-router'

const UserNavBar = () => {
  return (
    <div className="sticky top-0 z-50 text-white">
      <div className="backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-10">
          <div>
            <Link
              to="/listings"
              className="shrink-0 text-2xl font-bold tracking-widest"
            >
              ODDBNB
            </Link>
          </div>

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
