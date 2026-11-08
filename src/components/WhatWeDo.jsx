import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Button from './Button'
import { serviceHighlights } from '../data/services'
import { workCapabilities, industries, techStack } from '../data/projects'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function WhatWeDo() {
  const reduced = useReducedMotion()

  return (
    <section id="what-we-do" className="relative overflow-hidden bg-ink-soft">
      <div className="pointer-events-none absolute top-0 right-0 h-80 w-80 glow-orb" aria-hidden="true" />

      {/* Block 1 — Who we are + Build / Maintain / Scale */}
      <div className="section-pad border-b border-line">
        <div className="container-max">
          <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <SectionHeading
              eyebrow="Who We Are"
              title="Smart, scalable and reliable digital solutions for growing businesses."
              description="MANDRIP designs, develops and maintains the digital systems businesses rely on — from first websites and online stores to custom applications, dashboards and long-term technical support."
              highlight="reliable digital solutions"
            />
            <div className="mb-14 md:mb-20 lg:justify-self-end">
              <Button href="#process">
                See How We Work
                <ArrowUpRight size={16} />
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {serviceHighlights.map((item, index) => (
              <motion.article
                key={item.title}
                className="rounded-[1.75rem] border border-line bg-ink p-8 transition hover:border-accent/30"
                initial={reduced ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: reduced ? 0 : index * 0.06 }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-lg font-extrabold text-on-accent">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-2xl font-extrabold text-snow">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-mist">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Block 2 — Our work includes */}
      <div className="section-pad border-b border-line bg-ink">
        <div className="container-max grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-20">
          <motion.div
            className="lg:col-span-5"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="pill-tag">Our Work Includes</p>
            <h3 className="mt-7 text-3xl font-extrabold tracking-tight text-snow lg:text-4xl">
              Practical digital products, not just pretty pages.
            </h3>
            <p className="mt-7 max-w-md text-base leading-relaxed text-mist">
              We help ambitious businesses across India and internationally establish, improve and
              scale their digital presence — with clean engineering, clear communication and
              products that stay maintainable after launch.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 sm:gap-7 lg:col-span-7">
            {workCapabilities.map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-3xl border border-line bg-ink-soft p-7"
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: reduced ? 0 : index * 0.05 }}
              >
                <h4 className="text-lg font-bold text-snow">{item.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-mist">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Block 3 — Industries + Technology */}
      <div className="section-pad">
        <div className="container-max grid gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="pill-tag">Who We Work With</p>
            <h3 className="mt-7 text-2xl font-bold text-snow sm:text-3xl">
              Industries & business types
            </h3>
            <ul className="mt-10 space-y-5">
              {industries.map((industry) => (
                <li
                  key={industry.name}
                  className="flex gap-4 rounded-2xl border border-line bg-ink px-5 py-5"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <div>
                    <p className="font-semibold text-snow">{industry.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{industry.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="h-fit rounded-[2rem] border border-accent/20 bg-gradient-to-br from-accent/10 via-ink to-ink p-8 sm:p-10 lg:sticky lg:top-28"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: reduced ? 0 : 0.08 }}
          >
            <p className="pill-tag">Technology</p>
            <h3 className="mt-7 text-2xl font-bold text-snow sm:text-3xl">Tools we build with</h3>
            <p className="mt-6 text-sm leading-relaxed text-mist sm:text-base">
              We specialise in modern web technologies — especially React.js and MERN stack
              development — chosen for speed, flexibility and long-term maintainability.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-black/30 px-4 py-2.5 text-sm font-medium text-snow/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
