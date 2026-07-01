import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Work', to: '/gallery' },
  { label: 'Philosophy', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Close menu when route changes
  useState(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 bg-white/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link 
            to="/" 
            className="text-xs font-semibold uppercase tracking-[0.45em] text-zinc-950 z-50 relative"
            onClick={() => setIsOpen(false)}
          >
            SecoStarr Agency
          </Link>
          
          <div className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.32em] transition ${isActive ? 'text-zinc-950 font-medium' : 'text-zinc-500 hover:text-zinc-950'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          
          <button 
            className="md:hidden z-50 relative p-2 -mr-2 text-zinc-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden flex flex-col gap-8"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <NavLink
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-2xl font-serif tracking-tight ${isActive ? 'text-zinc-950' : 'text-zinc-500'}`
                  }
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
            
            <div className="mt-auto pb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-4">Contact</p>
              <a href="mailto:studio@secostarr.com" className="text-sm font-medium">studio@secostarr.com</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
