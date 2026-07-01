import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowLeft, MapPin, Calendar, Tag, X } from 'lucide-react'
import SectionWrapper from '../components/layout/SectionWrapper'
import { projects } from '../data/projectsMockData'
import SEO from '../components/common/SEO'
import ProgressiveImage from '../components/common/ProgressiveImage'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)
  const [index, setIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  useEffect(() => {
    setIndex(0)
    window.scrollTo(0, 0)
  }, [id])

  // Disable body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isLightboxOpen])

  if (!project) return <div className="py-32 text-center">Project not found</div>

  return (
    <>
      <SEO 
        title={`${project.title} | SecoStarr Agency`} 
        description={project.summary}
        image={project.image}
      />
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999990] bg-zinc-950/95 backdrop-blur-xl flex items-center justify-center cursor-none"
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/50 hover:text-white transition-colors z-[999995]"
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="w-full h-full p-4 lg:p-20 flex items-center justify-center relative">
              <motion.img
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                src={project.images ? project.images[index] : project.image}
                alt={project.title}
                className="max-h-full max-w-full object-contain"
              />
              
              {project.images && project.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); setIndex((i) => (i - 1 + project.images.length) % project.images.length) }}
                    className="absolute left-4 lg:left-10 p-4 text-white/50 hover:text-white transition-colors"
                  >
                    <ChevronLeft className="h-10 w-10" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setIndex((i) => (i + 1) % project.images.length) }}
                    className="absolute right-4 lg:right-10 p-4 text-white/50 hover:text-white transition-colors"
                  >
                    <ChevronRight className="h-10 w-10" />
                  </button>
                  
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest uppercase">
                    {index + 1} / {project.images.length}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section 
        className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-zinc-950 pt-20 cursor-none" 
        data-cursor="image" 
        onClick={() => setIsLightboxOpen(true)}
      >
        <motion.div
          animate={{ x: `-${index * 100}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="flex h-full w-full"
        >
          {project.images && project.images.length > 0 ? (
            project.images.map((img) => (
              <div key={img} className="h-full w-full flex-shrink-0 relative">
                <ProgressiveImage src={img} alt={project.title} className="opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              </div>
            ))
          ) : (
            <div className="h-full w-full flex-shrink-0 relative">
              <ProgressiveImage src={project.image} alt={project.title} className="opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
            </div>
          )}
        </motion.div>

        {project.images && project.images.length > 1 && (
          <>
            <motion.button
              onClick={(e) => { e.stopPropagation(); setIndex((i) => (i - 1 + project.images.length) % project.images.length) }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md hover:bg-white hover:text-black transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>
            <motion.button
              onClick={(e) => { e.stopPropagation(); setIndex((i) => (i + 1) % project.images.length) }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md hover:bg-white hover:text-black transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
            
            <div className="absolute bottom-40 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setIndex(i) }}
                  className={`h-1.5 transition-all duration-300 ${i === index ? 'w-8 bg-white' : 'w-2 bg-white/40'} rounded-full`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute bottom-10 left-6 right-6 lg:left-10 lg:right-10 flex flex-col md:flex-row md:items-end justify-between gap-8 text-white max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 mb-4">{project.category} / {project.year}</p>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1]">
                {project.title}
              </h1>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 }} 
            className="flex flex-col gap-3 text-sm text-zinc-300 border-l border-zinc-700 pl-6"
          >
            <span className="flex items-center gap-3"><MapPin className="h-4 w-4 text-zinc-500" /> {project.location}</span>
            <span className="flex items-center gap-3"><Calendar className="h-4 w-4 text-zinc-500" /> {project.year}</span>
            <span className="flex items-center gap-3"><Tag className="h-4 w-4 text-zinc-500" /> {project.category}</span>
          </motion.div>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="grid gap-16 lg:grid-cols-[2fr_1fr] items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-400">Concept & Context</p>
              <p className="text-xl md:text-2xl leading-relaxed text-zinc-800 font-serif">
                {project.summary}
              </p>
              <p className="text-base md:text-lg leading-relaxed text-zinc-600">
                {project.description || "Every spatial sequence is calibrated for movement, pause, privacy, and daily ritual. Concrete, timber, glass, and stone are treated as living surfaces with weight and memory, reducing visual noise until proportion, material, and light become the primary language."}
              </p>
            </div>
            
            {project.images && project.images.length > 0 && (
              <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="aspect-[4/5] bg-zinc-100 overflow-hidden">
                   <ProgressiveImage src={project.images[0] || project.image} alt="Detail 1" />
                </div>
                <div className="aspect-[4/5] bg-zinc-100 overflow-hidden translate-y-8">
                   <ProgressiveImage src={project.images[1] || project.image} alt="Detail 2" />
                </div>
              </div>
            )}
          </div>

          <div className="space-y-12 lg:sticky lg:top-32 lg:pl-10 lg:border-l lg:border-zinc-200">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-2">Typology</p>
                <p className="text-sm font-medium text-zinc-900">{project.category}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-2">Location</p>
                <p className="text-sm font-medium text-zinc-900">{project.location}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-2">Year</p>
                <p className="text-sm font-medium text-zinc-900">{project.year}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-2">Status</p>
                <p className="text-sm font-medium text-zinc-900">{project.status || 'Completed'}</p>
              </div>
            </div>

            <div className="space-y-6 pt-8 border-t border-zinc-200">
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">Key Features</p>
              <ul className="space-y-4">
                {(project.features || project.metrics).map((f) => (
                  <li key={f} className="flex items-start gap-4 text-sm text-zinc-700">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-zinc-400" />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.drawings && project.drawings.length > 0 && (
              <div className="space-y-6 pt-8 border-t border-zinc-200">
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">Drawings</p>
                <div className="flex flex-col gap-3">
                  {project.drawings.map((d) => (
                    <a key={d} href={d} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 border border-zinc-200 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all">
                      <Tag className="h-4 w-4 text-zinc-400 group-hover:text-zinc-400" />
                      <span className="text-xs uppercase tracking-widest font-medium">{d.split('/').pop()}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </SectionWrapper>

      <div className="border-t border-zinc-200 bg-zinc-50">
        <SectionWrapper className="py-16 lg:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="font-serif text-3xl md:text-4xl">Next Project</h2>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-950 text-xs font-medium uppercase tracking-[0.2em] text-white hover:bg-zinc-800 transition-colors w-full md:w-auto"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Gallery
            </Link>
          </div>
        </SectionWrapper>
      </div>
    </>
  )
}