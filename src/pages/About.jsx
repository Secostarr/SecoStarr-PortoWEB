import { motion } from 'framer-motion'
import SectionWrapper from '../components/layout/SectionWrapper'
import { philosophy } from '../data/studioPhilosophy'
import SEO from '../components/common/SEO'

export default function About() {
  return (
    <div className="pt-24">
      <SEO title="Philosophy & Team | SecoStarr Agency" />
      <SectionWrapper
        eyebrow="Studio"
        title="Our Philosophy"
        description="Founded in 2020, SecoStarr Agency practices architecture as a quiet discipline—composing spaces that endure through restraint, material integrity, and sensitivity to place."
      >
        <div className="grid gap-16 md:grid-cols-2">
          <div className="space-y-8">
            {philosophy.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15, duration: 0.6 }}>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">{item.title}</p>
                <p className="mt-3 text-lg leading-relaxed text-zinc-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
          <div className="relative aspect-[4/3] bg-zinc-100">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
              alt="Studio workspace"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Practice"
        title="Team & Process"
        description="A small, senior-led team collaborating closely with consultants, artisans, and clients from sketch to completion."
      >
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Led by</p>
            <h3 className="font-serif text-3xl tracking-tight">SecoStarr Team</h3>
            <p className="text-zinc-600">Principal Architect, Founder</p>
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Collaborators</p>
            <h3 className="font-serif text-3xl tracking-tight">12</h3>
            <p className="text-zinc-600">Engineers, landscape, lighting</p>
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Projects</p>
            <h3 className="font-serif text-3xl tracking-tight">28+</h3>
            <p className="text-zinc-600">Completed across Indonesia</p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}