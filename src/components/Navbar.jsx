import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Work',       href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(7, 13, 26, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(79,142,247,0.1)' : '1px solid transparent',
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a
          href="#hero"
          onClick={e => handleLink(e, '#hero')}
          className="font-display font-black text-xl tracking-tight"
          style={{ color: 'var(--accent)' }}
        >
          BR.
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={e => handleLink(e, href)}
              className="font-body text-sm font-medium text-muted hover:text-ink transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-[2px] bg-ink transition-all duration-200"
            style={{ transform: open ? 'rotate(45deg) translateY(7px)' : 'none' }}
          />
          <span
            className="block w-5 h-[2px] bg-ink transition-all duration-200"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-5 h-[2px] bg-ink transition-all duration-200"
            style={{ transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none' }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden flex flex-col px-6 pb-6 gap-5"
            style={{ background: 'rgba(7, 13, 26, 0.97)', borderBottom: '1px solid var(--border)' }}
          >
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={e => handleLink(e, href)}
                className="font-display font-bold text-lg text-ink hover:text-accent transition-colors"
              >
                {label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
