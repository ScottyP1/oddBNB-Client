import type { ReactNode } from 'react'

type ListingShellProps = {
  header: ReactNode
  gallery: ReactNode
  info: ReactNode
  sidebar: ReactNode
  amenities: ReactNode
  infoFullWidth?: boolean
  footer?: ReactNode
}

const ListingShell = ({
  header,
  gallery,
  info,
  sidebar,
  amenities,
  infoFullWidth = false,
  footer,
}: ListingShellProps) => {
  return (
    <div className="relative min-h-screen text-white">
      <div className="relative z-20 mx-auto w-full max-w-6xl px-4 py-10">
        {header}
        {infoFullWidth && <div className="mt-6">{info}</div>}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] mt-4">
          <section className="space-y-6">
            {gallery}
            {!infoFullWidth && info}
          </section>

          <aside className="space-y-6 lg:flex lg:flex-col lg:self-stretch">
            {sidebar}
          </aside>

          {amenities}
        </div>
        {footer && <div className="mt-8">{footer}</div>}
      </div>
    </div>
  )
}

export default ListingShell
