import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Button from './Button'
import { maintenanceFeatures } from '../data/pricing'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Maintenance() {
  const reduced = useReducedMotion()

  return (
    <section id="maintenance" className="section-pad relative overflow-hidden bg-snow text-ink">
      <div
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-max relative grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="max-w-xl">
          <SectionHeading
            light
            eyebrow="Maintenance"
            title="Your Website Doesn't Stop Growing. Neither Should We."
            description="Launch is only the beginning. We stay involved with security updates, bug fixes, content changes, performance checks and technical support — so your website or application remains reliable as your business evolves."
          />
          <Button section="contact" variant="light">
            Explore Maintenance Plans
          </Button>
        </div>

        <motion.div
          className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-[0_30px_80px_-40px_rgba(10,10,11,0.35)] sm:p-10"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
        >
          <div className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-on-accent">
            <ShieldCheck size={22} strokeWidth={1.75} />
          </div>
          <h3 className="text-xl font-bold text-ink">What we take care of</h3>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
            {maintenanceFeatures.map((feature, index) => (
              <motion.li
                key={feature}
                className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm font-semibold text-zinc-800"
                initial={reduced ? false : { opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: reduced ? 0 : index * 0.04 }}
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-accent-deep" />
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
