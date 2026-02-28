import { createFileRoute, Link } from '@tanstack/react-router'
import Navbar from '@/components/Navbar'
import SquircleShift from '@/components/SquircleShift'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <div className="fixed inset-0 opacity-70">
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

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-16 pt-10">
        <Navbar />

        <section className="mt-16 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              Explore the odd
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Book extraordinary stays, not ordinary rooms.
            </h1>
            <p className="max-w-xl text-base text-white/70 sm:text-lg">
              Treehouses, domes, cabins, and desert retreats. Curated places
              designed to feel like a story.
            </p>

            <div className="rounded-3xl border border-white/15 bg-black/50 p-3 shadow-2xl backdrop-blur">
              <div className="grid gap-3 md:grid-cols-[1.2fr_1fr_0.9fr_0.7fr]">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    Where
                  </p>
                  <p className="text-sm font-semibold">Anywhere, Earth</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    Dates
                  </p>
                  <p className="text-sm font-semibold">Mar 14 - Mar 19</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    Guests
                  </p>
                  <p className="text-sm font-semibold">2 adults</p>
                </div>
                <Link
                  to="/listings"
                  className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white/90"
                >
                  Search stays
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 text-xs text-white/60">
              <span className="rounded-full border border-white/15 px-3 py-1">
                Flexible cancellation
              </span>
              <span className="rounded-full border border-white/15 px-3 py-1">
                Verified hosts
              </span>
              <span className="rounded-full border border-white/15 px-3 py-1">
                24/7 support
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              {
                title: 'Cliffside A-Frame',
                location: 'Big Sur, CA',
                price: '$320/night',
              },
              {
                title: 'Glass Dome',
                location: 'Joshua Tree, CA',
                price: '$280/night',
              },
              {
                title: 'Floating Cabin',
                location: 'Lake Louise, CA',
                price: '$240/night',
              },
            ].map((stay) => (
              <div
                key={stay.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <div className="h-36 rounded-2xl bg-gradient-to-br from-sky-500/40 via-emerald-400/20 to-fuchsia-500/30" />
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{stay.title}</p>
                    <p className="text-xs text-white/60">{stay.location}</p>
                  </div>
                  <p className="text-sm font-semibold">{stay.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-lg font-semibold">Browse by vibe</h2>
            <button className="text-sm font-semibold text-white/70 transition hover:text-white">
              View all categories
            </button>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'Treehouses',
              'Desert Domes',
              'Lakeside',
              'Arctic Retreats',
              'Tiny Homes',
              'Architectural',
              'Jungle',
              'Cabins',
            ].map((tag) => (
              <div
                key={tag}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-sm font-semibold backdrop-blur"
              >
                {tag}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur lg:grid-cols-3">
          {[
            { label: 'New stays weekly', value: '120+' },
            { label: 'Average host rating', value: '4.92' },
            { label: 'Countries covered', value: '48' },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-semibold">{item.value}</p>
              <p className="text-sm text-white/60">{item.label}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
