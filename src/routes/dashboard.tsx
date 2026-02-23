import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

import FilterBar from '@/components/FilterBar'
import AuthBtnGroup from '@/components/AuthBtnGroup'

export const Route = createFileRoute('/dashboard')({
  component: DashboardPage,
})

function DashboardPage() {
  return (
    <div className="h-screen w-full bg-linear-to-t from-gray-500 to-white">
      <AuthBtnGroup className="mt-4 mr-4" />

      <section className="p-12 flex flex-col gap-24">
        {/* Top Header*/}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-widest ">ODDBNB</h1>
          <FilterBar />
          <Link to=".">Become Host</Link>
        </div>

        {/* Main Content*/}
        <section className="flex justify-between">
          <div className="bg-black w-12 h-12" />
          <div className="bg-black w-12 h-12" />
          <div className="bg-black w-12 h-12" />
          <div className="bg-black w-12 h-12" />
          <div className="bg-black w-12 h-12" />
          <div className="bg-black w-12 h-12" />
          <div className="bg-black w-12 h-12" />
        </section>
      </section>
    </div>
  )
}
