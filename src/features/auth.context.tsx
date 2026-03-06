import { createContext, useContext, useEffect, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'

type AuthState = {
  token: string | null
  setToken: (t: string | null) => void
  logout: () => void
}

const AuthContext = createContext<AuthState | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setTokenState] = useState<string | null>(null)
  const queryClient = useQueryClient()

  useEffect(() => {
    const stored = localStorage.getItem('token')
    if (stored) setTokenState(stored)
  }, [])

  const setToken = (t: string | null) => {
    if (t) {
      localStorage.setItem('token', t)
    } else {
      localStorage.removeItem('token')
    }
    setTokenState(t)
  }

  const logout = () => {
    setToken(null)
    queryClient.removeQueries({ queryKey: ['me'] })
  }

  return (
    <AuthContext.Provider value={{ token, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be inside provider')
  return ctx
}
