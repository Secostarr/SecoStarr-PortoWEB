import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import SectionWrapper from '../components/layout/SectionWrapper'
import { projects } from '../data/projectsMockData'
import { philosophy } from '../data/studioPhilosophy'
import SEO from '../components/common/SEO'
import ProgressiveImage from '../components/common/ProgressiveImage'

// Component for staggered text reveal
const RevealText = ({ text, delay = 0 }) => {
  return (
    <span className="inline-block overflow-hidden pb-2">
      <motion.span
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 1, 
          ease: [0.22, 1, 0.36, 1], 
          delay: delay 
        }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </span>
  )
}

export default function Home() {
  const featured = projects.slice(0, 3)
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Slower parallax for background
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])

  return (
    <div ref={containerRef}>
      <SEO />
      <main>
        <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden lg:h-[100vh]">
          <motion.div style={{ y: yHero }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
            <ProgressiveImage
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=80"
              alt="Monolith Residence"
              className="h-full w-full"
            />
            <div className="absolute inset-0 bg-zinc-950/40 sm:bg-gradient-to-t sm:from-zinc-950/90 sm:via-zinc-950/20 sm:to-transparent" />
          </motion.div>

          <div className="relative z-10 w-full px-6 py-20 lg:px-10 flex flex-col justify-center h-full">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
              <p className="text-xs uppercase tracking-[0.45em] text-zinc-400 overflow-hidden">
                <motion.span 
                  initial={{ y: 20, opacity: 0 }} 
                  animate={{ y: 0, opacity: 1 }} 
                  transition={{ delay: 0.1, duration: 0.8 }}
                  className="inline-block"
                >
                  Architecture Studio
                </motion.span>
              </p>
              
              <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-white md:text-7xl lg:text-9xl">
                <RevealText text="Spaces composed" delay={0.2} />{' '}
                <br />
                <span className="relative inline-block">
                  <RevealText text="with restraint" delay={0.3} />
                  <motion.span 
                    initial={{ scaleX: 0 }} 
                    animate={{ scaleX: 1 }} 
                    transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                    className="absolute bottom-1 lg:bottom-4 left-0 w-full h-1 lg:h-2 bg-amber-700/60 origin-left" 
                  />
                </span>
                {' '}
                <br />
                <RevealText text="and permanence." delay={0.4} />
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-10 max-w-xl text-base leading-relaxed text-zinc-300 md:text-lg"
              >
                SecoStarr Agency designs residential, hospitality, and cultural spaces rooted in material honesty, human scale, and quiet permanence across the Indonesian archipelago.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-12 flex flex-col xl:flex-row xl:items-end gap-10 xl:gap-12"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 xl:pb-2">
                  <Link
                    to="/gallery"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-zinc-700/50 text-sm font-medium uppercase tracking-[0.2em] text-white hover:bg-zinc-800 transition-colors w-full sm:w-auto"
                  >
                    View Work <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-4 py-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-300 hover:text-white transition-colors w-full sm:w-auto"
                  >
                    Contact Studio
                  </Link>
                </div>
                
                <div className="grid grid-cols-3 gap-4 sm:gap-8 xl:gap-12 w-full xl:w-auto xl:flex xl:items-center border-t border-zinc-700/50 xl:border-t-0 pt-6 xl:pt-0 mt-2 xl:mt-0">
                  <div className="xl:border-l border-zinc-700/50 xl:pl-8 h-16 flex flex-col justify-center">
                    <p className="text-2xl sm:text-3xl font-serif text-white">3</p>
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-500 mt-1">Completed</p>
                  </div>
                  <div className="border-l border-zinc-700/50 pl-4 sm:pl-8 h-16 flex flex-col justify-center">
                    <p className="text-2xl sm:text-3xl font-serif text-white">12+</p>
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-500 mt-1">Projects</p>
                  </div>
                  <div className="border-l border-zinc-700/50 pl-4 sm:pl-8 h-16 flex flex-col justify-center">
                    <p className="text-2xl sm:text-3xl font-serif text-white">8</p>
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-500 mt-1">Years</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative z-10 w-full px-6 py-6 lg:px-10 flex justify-end text-white sm:bg-gradient-to-t sm:from-zinc-950/80 sm:to-transparent mt-auto"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs sm:text-sm text-zinc-400 text-right sm:text-left">
              <span>Featured:</span>
              <span className="font-medium text-white">Monolith Residence</span>
              <span className="hidden sm:inline text-zinc-600">|</span>
              <span>Bandung, 2026</span>
            </div>
          </motion.div>
        </section>

        <SectionWrapper
          eyebrow="Selected Work"
          title="Recent Projects"
          description="A curated selection of residential, hospitality, and cultural commissions completed across Indonesia."
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group"
              >
                <Link to={`/project/${project.id}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                    <ProgressiveImage
                      src={project.image}
                      alt={project.title}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6 space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                      {project.category} · {project.year}
                    </p>
                    <h3 className="font-serif text-2xl tracking-tight text-zinc-950 group-hover:text-amber-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-600 line-clamp-2">{project.summary}</p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3 border border-zinc-300 text-sm uppercase tracking-[0.2em] hover:bg-zinc-50 transition-colors"
            >
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </SectionWrapper>

        <SectionWrapper
          className="bg-zinc-950 text-white"
          eyebrow="Philosophy"
          title="How We Work"
          description="Three principles that guide every commission from concept to construction."
        >
          <div className="grid gap-12 md:grid-cols-3">
            {philosophy.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="space-y-4"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-amber-700">{p.title}</p>
                <h3 className="font-serif text-3xl tracking-tight">{p.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-3 border border-zinc-700 text-sm uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors"
            >
              Read Philosophy <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-white" eyebrow="Contact" title="Start a Conversation" description="We accept a limited number of commissions each year. Reach out to discuss your project.">
          <div className="max-w-2xl">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-zinc-950 text-sm uppercase tracking-[0.2em] text-white hover:bg-zinc-800 transition-colors"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-6 text-sm text-zinc-500">Or email directly at studio@example.com</p>
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}