const LogoBanners = () => {
  return (
    <div className="absolute inset-0 pointer-events-none text-white/30 text-[8rem]">
      {/* LEFT */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 rotate-180 [writing-mode:vertical-rl] tracking-[60px]">
        BnBodd
      </div>

      {/* RIGHT */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] tracking-[60px]">
        OddBnB
      </div>
    </div>
  )
}

export default LogoBanners
