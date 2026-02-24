import { Outlet, createFileRoute } from '@tanstack/react-router'
import VideoCard from '@/components/VideoCard'
import LogoBanners from '@/components/LogoBanners'
import dotGridImg from '/dotgrid.png'

export const Route = createFileRoute('/auth')({
  component: AuthLayout,
})

function AuthLayout() {
  return (
    <div
      className="relative h-screen w-full flex justify-center items-center
                    bg-linear-to-tr from-[#D9E9FF] to-black to-80%"
    >
      {/* Side banners */}
      <LogoBanners />

      {/* Decorations */}
      <img
        src={dotGridImg}
        className="absolute top-0 left-0 z-20 pointer-events-none"
        width={500}
      />
      <img
        src={dotGridImg}
        className="absolute bottom-0 right-0 z-20 pointer-events-none"
        width={500}
      />

      {/* Card */}
      <VideoCard>
        <Outlet />
      </VideoCard>
    </div>
  )
}
