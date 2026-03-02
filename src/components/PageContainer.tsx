import type { ReactNode } from 'react'

type PageContainerProps = {
  children: ReactNode
  className?: string
}

const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <div
      className={`mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-10 text-white ${className ?? ''}`}
    >
      {children}
    </div>
  )
}

export default PageContainer
