import { redirect } from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/react-query'

import { meQueryOptions } from '@/hooks/auth/useAuth'
import type { User } from '@/types/user'

function getStoredToken() {
  if (typeof window === 'undefined') return null
  return window.localStorage.getItem('token')
}

export function requireToken() {
  if (!getStoredToken()) {
    throw redirect({ to: '/auth/login' })
  }
}

export async function requireAuthenticatedUser(queryClient: QueryClient) {
  requireToken()
  return queryClient.ensureQueryData(meQueryOptions) as Promise<User>
}

export async function requireAdminUser(queryClient: QueryClient) {
  const user = await requireAuthenticatedUser(queryClient)

  if (user.role !== 'ADMIN') {
    throw redirect({ to: '/' })
  }

  return user
}
