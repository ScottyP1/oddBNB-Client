import { Link } from '@tanstack/react-router'

import logoImg from '/logo.jpg'

const footerGroups = [
  {
    title: 'Explore',
    links: [
      { label: 'Browse stays', to: '/listings' },
      { label: 'Trips & stays', to: '/profile/trips' },
      { label: 'Host dashboard', to: '/profile/hosting' },
      { label: 'Account settings', to: '/profile/settings' },
    ],
  },
  // {
  //   title: 'Company',
  //   links: [
  //     { label: 'About oddBNB', href: '#' },
  //     { label: 'Careers', href: '#' },
  //     { label: 'Press kit', href: '#' },
  //     { label: 'Investor notes', href: '#' },
  //   ],
  // },
  // {
  //   title: 'Support',
  //   links: [
  //     { label: 'Help center', href: '#' },
  //     { label: 'Cancellation options', href: '#' },
  //     { label: 'Accessibility', href: '#' },
  //     { label: 'Trust & safety', href: '#' },
  //   ],
  // },
  {
    title: 'Connect',
    links: [
      { label: 'Portfolio', href: 'https://codycodes.dev/' },
      { label: 'LinkedIn', href: 'www.linkedin.com/in/codyscott3' },
      { label: 'GitHub', href: 'https://github.com/ScottyP1' },
    ],
  },
] as const

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 mt-20 border-t border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1.8fr]">
          <div className="space-y-5">
            <Link to="/listings" className="inline-flex items-center gap-4">
              <img
                src={logoImg}
                alt="oddBNB logo"
                className="h-14 w-14 rounded-3xl ring-1 ring-white/20"
              />
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                  oddbnb
                </p>
                <p className="text-lg font-semibold text-white">
                  Stay different
                </p>
              </div>
            </Link>

            <p className="max-w-md text-sm leading-6 text-white/65">
              Curated stays for travelers who want the strange, the cinematic,
              and the unforgettable. Built for dreamy bookings, weird escapes,
              and bold hosting.
            </p>

            <div className="space-y-2 text-sm text-white/65">
              <p>Contact: oddbnb@support.com</p>
              <p>Phone: +1 (555) 281-4902</p>
              <p>Based in: Jeffersonville, OH</p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
                  {group.title}
                </p>
                <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
                  {group.links.map((link) =>
                    'to' in link ? (
                      <Link
                        key={link.label}
                        to={link.to}
                        className="transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        className="transition hover:text-white"
                        target={
                          link.href.startsWith('http') ? '_blank' : undefined
                        }
                        rel={
                          link.href.startsWith('http')
                            ? 'noreferrer'
                            : undefined
                        }
                      >
                        {link.label}
                      </a>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {year} oddBNB. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms
            </a>
            <a href="#" className="transition hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
