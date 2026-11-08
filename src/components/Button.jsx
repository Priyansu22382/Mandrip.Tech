import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { getPathBySection } from '../data/routes'

const variants = {
  primary:
    'bg-accent text-on-accent hover:bg-accent-bright shadow-[0_0_24px_rgba(182,255,60,0.18)]',
  secondary:
    'bg-transparent text-snow ring-1 ring-white/15 hover:bg-white/5 hover:ring-accent/40',
  light:
    'bg-ink text-snow hover:bg-ink-soft shadow-[0_0_0_1px_rgba(10,10,11,0.2)]',
  ghost: 'bg-transparent text-snow/90 hover:text-accent hover:bg-white/5',
}

export default function Button({
  children,
  section,
  href,
  to,
  variant = 'primary',
  className = '',
  type,
  onClick,
  disabled = false,
}) {
  const navigate = useNavigate()
  const reduced = useReducedMotion()
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold tracking-wide transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`

  const motionProps = reduced
    ? {}
    : {
        whileHover: { y: -1 },
        whileTap: { scale: 0.98 },
      }

  const targetPath = to || (section ? getPathBySection(section) : null)

  const handleClick = (event) => {
    if (targetPath) {
      event.preventDefault()
      navigate(targetPath)
    }
    onClick?.(event)
  }

  if (type === 'submit' || type === 'reset') {
    return (
      <motion.button
        type={type}
        className={classes}
        onClick={onClick}
        disabled={disabled}
        {...motionProps}
      >
        {children}
      </motion.button>
    )
  }

  if (targetPath) {
    return (
      <motion.button
        type="button"
        className={classes}
        onClick={handleClick}
        disabled={disabled}
        {...motionProps}
      >
        {children}
      </motion.button>
    )
  }

  if (href) {
    return (
      <motion.a href={href} className={classes} onClick={onClick} {...motionProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
