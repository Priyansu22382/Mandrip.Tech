import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { services } from '../data/services'
import { Link } from 'react-router-dom'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Services() {
  const reduced = useReducedMotion()

  return (
    <section id="services" className="section-pad relative overflow-hidden bg-ink">
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 glow-orb-soft" aria-hidden="true" />

      <div className="container-max">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything You Need to Grow Digitally."
          description="From custom websites and e-commerce platforms to React applications, dashboards, redesigns and ongoing maintenance — we cover the full digital lifecycle."
          highlight="Grow Digitally."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.id}
                className="group flex h-full flex-col rounded-[1.75rem] border border-line bg-ink-soft p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_20px_60px_-30px_rgba(182,255,60,0.35)]"
                initial={reduced ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.45,
                  delay: reduced ? 0 : index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-on-accent transition-transform duration-300 group-hover:scale-105">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-bold text-snow">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  {service.longDescription || service.description}
                </p>

                {service.deliverables?.length > 0 && (
                  <ul className="mt-5 space-y-2 border-t border-line pt-5">
                    {service.deliverables.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-snow/80">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  to="/contact"
                  className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-bold text-accent transition-colors hover:text-accent-bright"
                >
                  Discuss This Service
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
