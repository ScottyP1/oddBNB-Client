import { createContext, useContext, useState } from 'react'

type AuthState = {
  token: string | null
  setToken: (t: string | null) => void
}

const AuthContext = createContext<AuthState | null>(null)

export function AuthProvider({ children }: { children: React.ReactElement }) {
  const [token, setToken] = useState<string | null>(null)

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be inside provider')
  return ctx
}
