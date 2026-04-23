import { redirect } from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/react-query'

import { meQueryOptions } from '@/hooks/auth/useAuth'
import type { User } from '@/types/user'

function getStoredToken() {
  if (typeof window === 'undefined') return null
  return window.localStorage.getItem('token')
}

export function requireToken() {
  // Auth is stored in localStorage, so we can only reliably enforce this check
  // in the browser. During SSR/hard refresh, defer the check until hydration.
  if (typeof window === 'undefined') return

  if (!getStoredToken()) {
    throw redirect({ to: '/auth/login' })
  }
}

export async function requireAuthenticatedUser(queryClient: QueryClient) {
  if (typeof window === 'undefined') return null

  requireToken()
  return queryClient.ensureQueryData(meQueryOptions) as Promise<User>
}

export async function requireAdminUser(queryClient: QueryClient) {
  if (typeof window === 'undefined') return null

  const user = await requireAuthenticatedUser(queryClient)

  if (!user) {
    throw redirect({ to: '/auth/login' })
  }

  if (user.role !== 'ADMIN') {
    throw redirect({ to: '/' })
  }

  return user
}

export async function requireHostUser(queryClient: QueryClient) {
  if (typeof window === 'undefined') return null

  const user = await requireAuthenticatedUser(queryClient)

  if (!user) {
    throw redirect({ to: '/auth/login' })
  }

  if (user.role !== 'HOST' && user.role !== 'ADMIN') {
    throw redirect({ to: '/profile' })
  }

  return user
}
