import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { differentiators } from '../data/pricing'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function WhyChooseUs() {
  const reduced = useReducedMotion()

  return (
    <section id="about" className="section-pad relative bg-snow text-ink">
      <div className="container-max">
        <SectionHeading
          light
          eyebrow="Why MANDRIP"
          title="More Than Just a Development Agency."
          description="We partner with businesses that care about quality — delivering digital products that are thoughtful, durable and ready to grow."
          highlight="Development Agency."
        />

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <motion.div
            className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(10,10,11,0.25)] lg:col-span-4 lg:p-10"
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
          >
            <p className="pill-tag-light">Our Approach</p>
            <p className="mt-6 text-2xl font-bold leading-snug tracking-tight text-ink sm:text-3xl">
              Technical excellence paired with business clarity.
            </p>
            <p className="mt-6 text-base leading-relaxed text-zinc-600">
              MANDRIP builds digital systems that look premium, perform reliably
              and stay maintainable long after launch — across India and
              internationally.
            </p>
            <p className="mt-5 text-base leading-relaxed text-zinc-600">
              Whether you need a new business website, an e-commerce platform, a
              React application, an admin dashboard or ongoing maintenance, we
              approach every engagement as a long-term technology partnership —
              not a one-off delivery.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 sm:p-7"
                initial={reduced ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.45,
                  delay: reduced ? 0 : index * 0.04,
                }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-accent px-2 font-mono text-xs font-extrabold text-on-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-zinc-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
