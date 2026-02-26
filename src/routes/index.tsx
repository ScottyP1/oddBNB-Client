import { createFileRoute } from '@tanstack/react-router'
import Navbar from '@/components/Navbar'
import SquircleShift from '@/components/SquircleShift'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 opacity-70">
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
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/90" />

      <div className="relative z-10 mx-auto min-h-screen w-full max-w-6xl px-6 py-10">
        <Navbar />
      </div>
    </div>
  )
}
