import {
  HeadContent,
  Scripts,
  createRootRoute,
  useRouterState,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'
import { AuthProvider } from '@/features/auth/auth.context'
import { queryClient } from '@/router'
import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/Navbar'
import SquircleShift from '@/components/SquircleShift'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Oddbnb',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })
  const isAuthRoute = pathname.startsWith('/auth')
  const isListingsRoute = pathname.startsWith('/listings')
  const isHomeRoute = pathname === '/'

  const navbarVariant = isListingsRoute
    ? 'listings'
    : isHomeRoute
      ? 'home'
      : 'minimal'

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              duration: 3000,
              style: {
                background: '#111',
                color: '#fff',
                borderRadius: '14px',
              },
            }}
          />
          <AuthProvider>
            <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
              <div className="pointer-events-none fixed inset-0 z-0 opacity-70">
                <SquircleShift
                  width="100%"
                  height="100vh"
                  speed={0.2}
                  brightness={1.05}
                  colorLayers={3}
                  lightBackground="#050505"
                  darkBackground="#050505"
                  colorTint="#03a9fc"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
              <Navbar hideAuthActions={isAuthRoute} variant={navbarVariant} />
              <div className="relative z-10">{children}</div>
            </div>
          </AuthProvider>
        </QueryClientProvider>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
