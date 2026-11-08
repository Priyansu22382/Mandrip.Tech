import { motion } from 'framer-motion'
import { ArrowUpRight, Play, Star } from 'lucide-react'
import Button from './Button'
import { useReducedMotion } from '../hooks/useReducedMotion'

function HeroVisual() {
  const reduced = useReducedMotion()

  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div className="absolute -inset-8 glow-orb" aria-hidden="true" />

      <motion.div
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-muted shadow-[0_40px_120px_-40px_rgba(182,255,60,0.25)]"
        animate={reduced ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="aspect-[4/3] bg-gradient-to-br from-zinc-800 via-zinc-900 to-black">
          <div className="absolute inset-0 grid-fade opacity-70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(182,255,60,0.18),transparent_45%)]" />

          <div className="absolute inset-6 rounded-3xl border border-white/10 bg-black/35 p-5 backdrop-blur-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              </div>
              <span className="rounded-full bg-accent/15 px-3 py-1 text-[10px] font-bold tracking-wider text-accent uppercase">
                Live Build
              </span>
            </div>

            <div className="grid h-[calc(100%-2rem)] grid-cols-3 gap-3">
              <div className="col-span-2 space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="h-3 w-2/3 rounded-full bg-white/20" />
                <div className="h-3 w-full rounded-full bg-white/10" />
                <div className="h-3 w-5/6 rounded-full bg-white/10" />
                <div className="mt-auto grid grid-cols-2 gap-2 pt-6">
                  <div className="h-20 rounded-xl bg-accent/20" />
                  <div className="h-20 rounded-xl bg-white/10" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="rounded-2xl border border-accent/20 bg-accent/10 p-3">
                  <p className="text-[10px] font-semibold text-mist uppercase">Score</p>
                  <p className="mt-1 text-2xl font-extrabold text-accent">98</p>
                </div>
                <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="space-y-2">
                    <div className="h-2 rounded-full bg-white/15" />
                    <div className="h-2 w-4/5 rounded-full bg-white/10" />
                    <div className="h-2 w-3/5 rounded-full bg-accent/40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-on-accent shadow-[0_0_40px_rgba(182,255,60,0.45)]"
          aria-label="Preview demo"
        >
          <Play size={22} fill="currentColor" className="ml-0.5" />
        </button>
      </motion.div>

      <motion.div
        className="absolute -bottom-5 -left-3 rounded-2xl border border-white/10 bg-ink/90 px-4 py-3 shadow-2xl backdrop-blur md:-left-6"
        animate={reduced ? undefined : { y: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <p className="text-[10px] font-semibold tracking-wider text-mist uppercase">Delivery Focus</p>
        <p className="mt-1 text-sm font-bold text-snow">Build · Maintain · Scale</p>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const reduced = useReducedMotion()

  const fadeUp = (delay = 0) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 grid-fade" aria-hidden="true" />
      <div
        className="pointer-events-none absolute top-10 right-0 h-[520px] w-[520px] glow-orb"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[360px] w-[360px] glow-orb-soft"
        aria-hidden="true"
      />

      <div className="container-max relative grid items-center gap-14 px-5 sm:px-8 md:px-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-16">
        <div>
          <motion.div
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 pr-4"
            {...fadeUp(0)}
          >
            <span className="flex -space-x-2">
              <span className="h-7 w-7 rounded-full bg-zinc-600 ring-2 ring-ink" />
              <span className="h-7 w-7 rounded-full bg-zinc-500 ring-2 ring-ink" />
              <span className="h-7 w-7 rounded-full bg-accent/80 ring-2 ring-ink" />
            </span>
            <span className="flex items-center gap-1 text-accent">
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
            </span>
            <span className="text-xs font-semibold text-mist">Trusted digital partner</span>
          </motion.div>

          <motion.p
            className="mb-4 text-sm font-bold tracking-[0.28em] text-accent uppercase"
            {...fadeUp(0.05)}
          >
            MANDRIP
          </motion.p>

          <motion.h1
            className="max-w-2xl text-balance text-4xl font-extrabold tracking-tight text-snow sm:text-5xl lg:text-[3.6rem] lg:leading-[1.05]"
            {...fadeUp(0.1)}
          >
            Building Digital Experiences That Move{' '}
            <span className="text-accent">Businesses Forward.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg"
            {...fadeUp(0.18)}
          >
            We design, develop and maintain websites, e-commerce platforms,
            React applications, dashboards and digital systems that help
            ambitious businesses grow, scale and stay ahead.
          </motion.p>

          <motion.div className="mt-9 flex flex-wrap gap-3" {...fadeUp(0.26)}>
            <Button section="contact">
              Start Your Project
              <Play size={14} fill="currentColor" />
            </Button>
            <Button section="work" variant="secondary">
              Explore Our Work
              <ArrowUpRight size={16} />
            </Button>
          </motion.div>

          <motion.p
            className="mt-8 text-sm font-medium tracking-wide text-mist/80"
            {...fadeUp(0.34)}
          >
            Your Technology Partner for Digital Growth.
          </motion.p>
        </div>

        <motion.div
          className="relative"
          initial={reduced ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroVisual />
        </motion.div>
      </div>

      <motion.div
        className="container-max relative mt-16 px-5 sm:px-8 md:px-12 lg:px-16"
        {...fadeUp(0.4)}
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/8 pt-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-mist uppercase">
            Built with modern stack
          </p>
          {['React.js', 'MERN', 'E-commerce', 'Dashboards', 'Maintenance'].map((item) => (
            <span key={item} className="text-sm font-semibold text-white/35">
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
