import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-screen flex items-center justify-center bg-zinc-950 text-white"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-30"
          src="https://assets.mixkit.co/videos/preview/mixkit-architecture-blueprint-animation-44222-large.mp4"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-10">
        <p className="mb-8 text-xs uppercase tracking-[0.5em] text-zinc-400">Architecture Studio</p>
        <h1 className="font-serif text-5xl leading-none tracking-tight md:text-8xl lg:text-[10rem]">
          Composed <br /> Spaces
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 max-w-2xl mx-auto text-lg leading-relaxed text-zinc-300"
        >
          We design silence, light, and material. Residential, cultural, and hospitality projects across Indonesia.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          href="/gallery"
          className="mt-16 inline-flex items-center gap-3 px-8 py-4 border border-zinc-700 text-sm uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors"
        >
          View Work
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-zinc-500"
      >
        <span className="uppercase tracking-[0.3em]">Scroll</span>
        <svg className="h-5 w-5 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </motion.section>
  )
}