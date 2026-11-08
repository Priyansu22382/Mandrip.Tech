import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Button from './Button'
import { pricingPlans } from '../data/pricing'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Pricing() {
  const reduced = useReducedMotion()

  return (
    <section id="pricing" className="section-pad relative bg-ink">
      <div className="container-max">
        <SectionHeading
          eyebrow="Engagement"
          title="Flexible Solutions for Every Business."
          description="Starting packages designed for clarity. Final pricing depends on project requirements and scope."
          highlight="Every Business."
          align="center"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.article
              key={plan.id}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                plan.featured
                  ? 'border-accent/40 bg-panel shadow-[0_0_40px_rgba(182,255,60,0.12)]'
                  : 'border-line bg-ink-soft'
              }`}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: reduced ? 0 : index * 0.06 }}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-[10px] font-bold tracking-wider text-on-accent uppercase">
                  Most Chosen
                </span>
              )}
              <p className="text-xs font-semibold tracking-[0.2em] text-mist uppercase">
                {plan.name}
              </p>
              <p className="mt-4 text-4xl font-extrabold tracking-tight text-snow">
                {plan.price}
              </p>
              <p className="mt-1 text-sm text-mist">Starting at</p>
              <p className="mt-5 text-sm leading-relaxed text-mist">{plan.description}</p>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-snow/90">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent-bright" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <Button
                  href="#contact"
                  variant={plan.featured ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-mist">
            Final pricing depends on project requirements and scope.
          </p>
          <div className="mt-5">
            <Button href="#contact" variant="secondary">
              Get a Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
