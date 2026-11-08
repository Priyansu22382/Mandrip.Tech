import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { useReducedMotion } from '../hooks/useReducedMotion'

const metrics = [
  { label: 'UI / UX Design', value: 96 },
  { label: 'Web Development', value: 98 },
  { label: 'Maintenance Support', value: 95 },
]

function Ring({ value, label, reduced, delay = 0 }) {
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={reduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
    >
      <div className="relative h-36 w-36">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 128 128">
          <circle
            cx="64"
            cy="64"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="10"
          />
          <circle
            cx="64"
            cy="64"
            r={radius}
            fill="none"
            stroke="#B6FF3C"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-extrabold text-snow">{value}%</span>
        </div>
      </div>
      <p className="mt-4 text-sm font-bold text-mist">{label}</p>
    </motion.div>
  )
}

export default function Expertise() {
  const reduced = useReducedMotion()

  return (
    <section id="expertise" className="section-pad relative overflow-hidden bg-ink-soft">
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 glow-orb" aria-hidden="true" />

      <div className="container-max grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Expertise"
            title="Deep Expertise In Cutting Edge Software Solutions."
            description="From polished interfaces to scalable React architecture and reliable maintenance — we combine design craft with engineering discipline."
            highlight="Software Solutions."
          />

          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            {metrics.map((metric, index) => (
              <Ring
                key={metric.label}
                value={metric.value}
                label={metric.label}
                reduced={reduced}
                delay={reduced ? 0 : index * 0.08}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="relative"
          initial={reduced ? false : { opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
        >
          <div className="absolute -inset-6 glow-orb-soft" aria-hidden="true" />
          <div className="relative mx-auto max-w-sm overflow-hidden rounded-[2.5rem] border border-white/10 bg-ink shadow-[0_40px_100px_-40px_rgba(182,255,60,0.35)]">
            <div className="border-b border-white/10 px-5 py-4">
              <div className="mx-auto h-1.5 w-16 rounded-full bg-white/15" />
            </div>
            <div className="space-y-4 p-5">
              <div className="rounded-2xl border border-accent/20 bg-accent/10 p-4">
                <p className="text-xs font-bold tracking-wider text-accent uppercase">Project Status</p>
                <p className="mt-2 text-lg font-extrabold text-snow">On Track</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-mist">Modules</p>
                  <p className="mt-1 text-xl font-bold text-snow">12</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-mist">Uptime</p>
                  <p className="mt-1 text-xl font-bold text-accent">99.9%</p>
                </div>
              </div>
              <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                {['Discovery complete', 'UI system ready', 'Development active'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-sm text-snow/85">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
