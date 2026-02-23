import mtnBgVid from '/videos/mnt-bg.mp4'
import type { ReactNode } from 'react'

type VideoCardProps = {
  children: ReactNode
}

export default function VideoCard({ children }: VideoCardProps) {
  return (
    <div className="w-250 h-150 border border-[#A6A6A6] rounded-lg relative overflow-hidden">
      {/* Video*/}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
      >
        <source src={mtnBgVid} />
      </video>

      {/* Film */}
      <div
        className="
          absolute inset-0 z-10
          bg-linear-to-tr
          from-transparent
          to-black
          to-70%
        "
      />

      {/* Content*/}
      <div className="relative z-20 flex justify-center items-center h-full">
        {children}
      </div>
    </div>
  )
}
