import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = 'left',
  highlight,
}) {
  const reduced = useReducedMotion()
  const alignClass = align === 'center' ? 'mx-auto text-center' : ''

  const renderTitle = () => {
    if (!highlight || !title.includes(highlight)) {
      return title
    }
    const [before, after] = title.split(highlight)
    return (
      <>
        {before}
        <span className={light ? 'text-accent-deep' : 'text-accent'}>{highlight}</span>
        {after}
      </>
    )
  }

  return (
    <motion.div
      className={`mb-14 max-w-3xl md:mb-20 ${alignClass}`}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && (
        <p className={`${light ? 'pill-tag-light' : 'pill-tag'} mb-6`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? 'text-ink' : 'text-snow'
        }`}
      >
        {renderTitle()}
      </h2>
      {description && (
        <p
          className={`mt-6 text-base leading-relaxed sm:text-lg ${
            light ? 'text-zinc-600' : 'text-mist'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
