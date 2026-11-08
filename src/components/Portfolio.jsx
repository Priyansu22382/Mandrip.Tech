import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Button from './Button'
import { projectCategories, projects } from '../data/projects'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const reduced = useReducedMotion()

  const filtered = useMemo(() => {
    if (active === 'All') return projects
    return projects.filter((project) => project.category === active)
  }, [active])

  return (
    <section id="work" className="section-pad relative overflow-hidden bg-ink">
      <div className="pointer-events-none absolute top-20 right-0 h-96 w-96 glow-orb" aria-hidden="true" />

      <div className="container-max">
        <div className="mb-4 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <SectionHeading
            eyebrow="Recent Work"
            title="Discover Our Recent Work."
            description="Explore the types of projects we build — business websites, e-commerce platforms, custom applications, dashboards and redesigns. Demo concepts until live client work is published."
            highlight="Recent Work."
          />
          <Button section="contact" className="shrink-0 self-start lg:mt-2">
            Explore Our Work
            <ArrowUpRight size={16} />
          </Button>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {projectCategories.map((category) => {
            const isActive = active === category
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-colors duration-200 ${
                  isActive
                    ? 'bg-accent text-on-accent'
                    : 'bg-white/5 text-mist hover:bg-white/10 hover:text-snow'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-ink-soft"
                initial={reduced ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{
                  duration: 0.35,
                  delay: reduced ? 0 : index * 0.04,
                }}
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.accent}`}
                >
                  <div className="absolute inset-0 grid-fade opacity-60" />
                  <div className="absolute inset-6 rounded-2xl border border-white/10 bg-ink/40 p-4 backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.03]">
                    <div className="mb-3 flex gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-2/3 rounded bg-white/20" />
                      <div className="h-2 w-full rounded bg-white/10" />
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <div className="h-16 rounded-lg bg-white/10" />
                        <div className="h-16 rounded-lg bg-accent/25" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-accent via-accent/80 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div>
                      <p className="text-xs font-bold tracking-wider text-on-accent/80 uppercase">
                        {project.category}
                      </p>
                      <p className="mt-1 text-lg font-extrabold text-on-accent">{project.title}</p>
                    </div>
                  </div>

                  {project.demo && (
                    <span className="absolute top-4 left-4 rounded-full bg-ink/70 px-3 py-1 text-[10px] font-semibold tracking-wider text-mist uppercase backdrop-blur">
                      Demo Project
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold tracking-[0.16em] text-accent uppercase">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-snow">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{project.description}</p>

                  {project.scope && (
                    <p className="mt-4 text-sm leading-relaxed text-snow/75">
                      <span className="font-semibold text-snow">Scope: </span>
                      {project.scope}
                    </p>
                  )}

                  {project.deliverables?.length > 0 && (
                    <ul className="mt-4 space-y-1.5">
                      {project.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-mist">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-mist"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
