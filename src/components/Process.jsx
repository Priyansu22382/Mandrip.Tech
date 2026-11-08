import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { processSteps } from '../data/pricing'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Process() {
  const reduced = useReducedMotion()

  return (
    <section id="process" className="section-pad relative bg-ink-soft">
      <div className="container-max">
        <SectionHeading
          eyebrow="Process"
          title="A Clear Path From Idea to Launch."
          description="A structured delivery process designed for clarity, quality and momentum at every stage."
          highlight="Idea to Launch."
        />

        <div className="relative">
          <div
            className="pointer-events-none absolute top-0 bottom-0 left-[19px] w-px bg-gradient-to-b from-accent/40 via-line to-transparent md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />

          <ol className="space-y-8 md:space-y-0">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.li
                  key={step.number}
                  className="relative md:grid md:grid-cols-2 md:gap-16 md:pb-14"
                  initial={reduced ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: reduced ? 0 : index * 0.05 }}
                >
                  <div
                    className={`pl-14 md:pl-0 ${
                      isEven ? 'md:pr-10 md:text-right' : 'md:col-start-2 md:pl-10'
                    }`}
                  >
                    <p className="font-mono text-sm font-semibold text-accent-bright">
                      {step.number}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-snow">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-mist md:text-base">
                      {step.description}
                    </p>
                  </div>

                  <span
                    className="absolute top-1 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-[10px] font-extrabold text-on-accent md:left-1/2 md:-translate-x-1/2"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
