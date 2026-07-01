import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['All', 'Residential', 'Cultural', 'Commercial', 'Interiors']

export default function FilterBar({ projects, onFilterChange }) {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
      <motion.div
        layout
        className="flex flex-wrap gap-3"
        role="group"
        aria-label="Project categories"
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => {
              setActive(cat)
              onFilterChange(cat)
            }}
            className={`px-4 py-2 text-sm uppercase tracking-[0.15em] transition-colors ${
              active === cat
                ? 'bg-zinc-950 text-white'
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-pressed={active === cat}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="text-sm text-zinc-500"
        >
          {filtered.length} project{filtered.length !== 1 ? 's' : ''}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}