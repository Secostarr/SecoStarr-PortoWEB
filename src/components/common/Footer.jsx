import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 px-6 py-16 text-white lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-zinc-500">Architecture Portfolio</p>
          <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-none tracking-tight md:text-7xl">
            Spaces composed with restraint, depth, and permanence.
          </h2>
        </div>
        <div className="flex flex-col justify-between gap-10 md:items-end">
          <a href="mailto:studio@example.com" className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-zinc-300 hover:text-white">
            studio@example.com <ArrowUpRight className="h-4 w-4" />
          </a>
          <p className="max-w-xs text-sm leading-relaxed text-zinc-500 md:text-right">
            Available for residential, hospitality, and selected cultural commissions across Indonesia.
          </p>
        </div>
      </div>
    </footer>
  )
}
