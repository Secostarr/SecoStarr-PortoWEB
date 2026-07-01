import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '../components/layout/SectionWrapper'
import FilterBar from '../components/portfolio/FilterBar'
import ProjectCard from '../components/portfolio/ProjectCard'
import { projects } from '../data/projectsMockData'
import SEO from '../components/common/SEO'

export default function Gallery() {
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(() => {
    return filter === 'All' ? projects : projects.filter((p) => p.category === filter)
  }, [filter])

  return (
    <SectionWrapper
      className="pt-32"
      eyebrow="Portfolio"
      title="All Projects"
      description="Filter by typology to explore the range of our built and speculative work."
    >
      <SEO title="Portfolio | SecoStarr Agency" />
      <FilterBar projects={projects} onFilterChange={setFilter} />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05, duration: 0.5 }}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-12 text-center text-zinc-500">No projects in this category.</p>
      )}
    </SectionWrapper>
  )
}