import { Link } from '@tanstack/react-router'

type NavbarProps = {
  hideAuthActions?: boolean
}

const Navbar = ({ hideAuthActions = false }: NavbarProps) => {
  return (
    <header className="flex items-center justify-between py-4">
      <Link to="/" className="inline-flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-white/10 ring-1 ring-white/20" />
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            oddbnb
          </p>
          <p className="text-sm font-semibold text-white">Stay different</p>
        </div>
      </Link>

      <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
        <span>Stays</span>
        <span>Experiences</span>
        <span>Host</span>
        <span>Help</span>
      </nav>

      {!hideAuthActions && (
        <div className="flex items-center gap-3">
          <Link
            to="/auth/login"
            className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10"
          >
            Sign in
          </Link>
          <Link
            to="/auth/register"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-white/90 sm:inline-flex"
          >
            Get started
          </Link>
        </div>
      )}
    </header>
  )
}

export default Navbar
