import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { demoTestimonials } from '../data/pricing'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Testimonials() {
  const reduced = useReducedMotion()

  return (
    <section id="testimonials" className="section-pad relative overflow-hidden bg-ink-soft">
      <div className="pointer-events-none absolute top-10 right-10 h-72 w-72 glow-orb" aria-hidden="true" />

      <div className="container-max">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say Results From Partners."
          description="Placeholder demo content only. These quotes are illustrative and do not represent real clients or verified results."
          highlight="From Partners."
        />

        <div className="mb-8 rounded-2xl border border-accent/20 bg-accent/5 px-5 py-3 text-sm text-accent">
          Demo content — replace with authentic testimonials once available.
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {demoTestimonials.map((item, index) => (
            <motion.blockquote
              key={item.id}
              className="flex h-full flex-col rounded-[1.75rem] border border-line bg-ink p-7 transition hover:border-accent/30"
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: reduced ? 0 : index * 0.06 }}
            >
              <p className="text-lg leading-relaxed text-snow/90">
                <span className="text-accent">&ldquo;</span>
                {item.quote}
                <span className="text-accent">&rdquo;</span>
              </p>
              <footer className="mt-auto flex items-center gap-3 pt-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-on-accent">
                  {index + 1}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-mist">{item.role}</span>
                  <span className="mt-1 block text-xs font-bold tracking-wider text-accent uppercase">
                    Demo Content
                  </span>
                </span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
