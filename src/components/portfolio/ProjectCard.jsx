import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ProgressiveImage from '../common/ProgressiveImage'

export default function ProjectCard({ project }) {
  const { id, title, category, year, location, image } = project
  const ref = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  return (
    <Link to={`/project/${id}`} className="group block" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative aspect-[3/4] overflow-hidden bg-zinc-100"
      >
        <motion.div style={{ y, height: "120%", top: "-10%" }} className="absolute inset-0 w-full">
          <ProgressiveImage
            src={image}
            alt={title}
            className="transition-transform duration-1000 ease-out group-hover:scale-105"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
          <p className="text-xs uppercase tracking-[0.28em] text-zinc-300">{category} / {year}</p>
          <h3 className="mt-1 font-serif text-2xl leading-tight tracking-tight md:text-3xl">{title}</h3>
          <p className="mt-2 text-sm text-zinc-300">{location}</p>
        </div>
      </motion.div>
    </Link>
  )
}