import { useEffect, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { useAuth } from '@/features/auth/auth.context'
import { useMe } from '@/features/auth/useAuth'

const UserMenu = () => {
  const { logout } = useAuth()
  const { data: user } = useMe()
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const isAdmin = user?.role === 'ADMIN'
  const isHost = user?.role === 'HOST'

  useEffect(() => {
    if (!open) return
    const handleClick = (event: MouseEvent) => {
      if (!menuRef.current) return
      if (!menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-semibold text-white/90 transition hover:bg-white/20"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="User menu"
      >
        U
      </button>
      {open && (
        <div className="absolute right-0 mt-3 w-48 rounded-2xl border border-white/15 bg-black/80 p-2 text-sm text-white shadow-2xl backdrop-blur">
          <Link
            to="/profile"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-3 py-2 text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            Profile
          </Link>
          <Link
            to="/profile"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-3 py-2 text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            Trips & stays
          </Link>
          {isAdmin ||
            (isHost && (
              <Link
                to="/listings/new"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                Add listing
              </Link>
            ))}
          {isAdmin && (
            <Link
              to="/users"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Users
            </Link>
          )}
          <button
            type="button"
            onClick={() => {
              setOpen(false)
              logout()
            }}
            className="mt-1 w-full rounded-xl px-3 py-2 text-left text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            Log out
          </button>
        </div>
      )}
    </div>
  )
}

export default UserMenu
