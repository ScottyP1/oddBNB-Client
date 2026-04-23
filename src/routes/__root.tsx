import {
  HeadContent,
  Scripts,
  createRootRoute,
  useRouterState,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'
import { AuthProvider } from '@/features/auth.context'
import { queryClient } from '@/router'
import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/Navbar'
import SquircleShift from '@/components/SquircleShift'
import EvilEye from '@/components/EvilEye'
import Footer from '@/components/Footer'

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
      {
        rel: 'icon',
        href: '/favicon.jpg',
        type: 'image/jpeg',
      },
    ],
  }),
  notFoundComponent: NotFoundPage,
  shellComponent: RootDocument,
})

function NotFoundPage() {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-[#060010]">
      <div className="absolute inset-0">
        <EvilEye
          eyeColor="#FF6F37"
          intensity={1.5}
          pupilSize={0.6}
          irisWidth={0.25}
          glowIntensity={0.35}
          scale={0.8}
          noiseScale={1}
          pupilFollow={1}
          flameSpeed={1}
          backgroundColor="#060010"
        />
      </div>
      <div className="relative z-10 select-none text-center">
        <h1 className="text-[clamp(5rem,18vw,14rem)] font-black leading-none tracking-[0.08em] text-white">
          404
        </h1>
      </div>
    </div>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })
  const isAuthRoute = pathname.startsWith('/auth')
  const isListingsRoute = pathname.startsWith('/listings')
  const isHomeRoute = pathname === '/'
  const isCreateRoute = pathname === '/listings/new'
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
            <div className="relative flex min-h-screen flex-col overflow-hidden bg-neutral-950 text-white">
              <div className="pointer-events-none fixed inset-0 z-0 opacity-70">
                <SquircleShift
                  width="100%"
                  height="100vh"
                  speed={0.3}
                  brightness={1.5}
                  colorLayers={2}
                  lightBackground="#050505"
                  darkBackground="#050505"
                  colorTint="#f5d11d"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 z-0" />
              <Navbar
                hideAuthActions={isAuthRoute}
                hideAddListing={isCreateRoute}
                variant={navbarVariant}
              />
              <div className="relative z-10 flex-1">{children}</div>
              <Footer />
            </div>
          </AuthProvider>
        </QueryClientProvider>
        {/* {import.meta.env.DEV ? (
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
        ) : null} */}
        <Scripts />
      </body>
    </html>
  )
}
