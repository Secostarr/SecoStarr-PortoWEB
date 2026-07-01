export default function SectionWrapper({ eyebrow, title, description, children, className = '' }) {
  return (
    <section className={`px-6 py-24 lg:px-10 lg:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || description) && (
          <div className="mb-16 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              {eyebrow ? (
                <p className="text-xs uppercase tracking-[0.4em] text-zinc-400">{eyebrow}</p>
              ) : null}
            </div>
            <div className="space-y-6">
              {title ? <h2 className="font-serif text-4xl leading-none tracking-tight text-zinc-950 md:text-6xl">{title}</h2> : null}
              {description ? <p className="max-w-2xl text-base leading-relaxed text-zinc-600">{description}</p> : null}
            </div>
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
