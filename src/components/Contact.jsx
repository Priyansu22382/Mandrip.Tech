import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { LinkedInIcon } from './icons'
import Button from './Button'
import { contactInfo } from '../data/pricing'
import { services } from '../data/services'
import { useReducedMotion } from '../hooks/useReducedMotion'

const budgetOptions = [
  'Under ₹15,000',
  '₹15,000 – ₹30,000',
  '₹30,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  'Above ₹1,00,000',
  'Not sure yet',
]

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  budget: '',
  description: '',
  website: '', // honeypot — leave empty
}

function validate(form) {
  const errors = {}

  if (!form.fullName.trim()) errors.fullName = 'Full name is required.'
  if (!form.email.trim()) {
    errors.email = 'Business email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required.'
  } else if (!/^[+\d][\d\s()-]{6,}$/.test(form.phone)) {
    errors.phone = 'Enter a valid phone number.'
  }
  if (!form.service) errors.service = 'Please select a service.'
  if (!form.budget) errors.budget = 'Please select an estimated budget.'
  if (!form.description.trim()) {
    errors.description = 'Please describe your project.'
  } else if (form.description.trim().length < 20) {
    errors.description = 'Please share a bit more detail (at least 20 characters).'
  }

  return errors
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-mist">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-400">{error}</span>}
    </label>
  )
}

const inputClass =
  'w-full rounded-2xl border border-line bg-ink px-4 py-3.5 text-sm text-snow outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/20'

export default function Contact() {
  const reduced = useReducedMotion()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      setStatusMessage('Please review the highlighted fields and try again.')
      return
    }

    // Honeypot filled = likely bot
    if (form.website) {
      setStatus('success')
      setStatusMessage('Thank you. Your project details have been received.')
      setForm(initialForm)
      return
    }

    setStatus('sending')
    setStatusMessage('')

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(contactInfo.email)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: form.fullName,
            email: form.email,
            phone: form.phone,
            company: form.company.trim() || 'Not provided',
            service: form.service,
            budget: form.budget,
            message: form.description,
            _replyto: form.email,
            _subject: `New MANDRIP enquiry from ${form.fullName}`,
            _template: 'table',
            _captcha: 'false',
          }),
        },
      )

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(result.message || 'Unable to send your message right now.')
      }

      setStatus('success')
      setStatusMessage(
        'Thank you. Your project details have been sent. We will get back to you soon.',
      )
      setForm(initialForm)
      setErrors({})
    } catch (error) {
      setStatus('failed')
      setStatusMessage(
        error.message ||
          'Something went wrong while sending. Please email us directly or try again.',
      )
    }
  }

  return (
    <section id="contact" className="section-pad relative bg-ink">
      <div className="container-max">
        <SectionHeading
          eyebrow="Contact"
          title="Have a Project in Mind? Let's Build Something Great."
          description="Share a few details about your business and goals. We'll respond with next steps and a clear path forward."
        />

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <motion.aside
            className="space-y-6"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-start gap-4 rounded-3xl border border-line bg-ink-soft p-5 transition hover:border-accent/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent-bright">
                <Mail size={18} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-snow">Email</span>
                <span className="mt-1 block break-all text-sm text-mist">
                  {contactInfo.email}
                </span>
              </span>
            </a>

            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 rounded-3xl border border-line bg-ink-soft p-5 transition hover:border-accent/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent-bright">
                <MessageCircle size={18} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-snow">WhatsApp</span>
                <span className="mt-1 block text-sm text-mist">{contactInfo.phoneDisplay}</span>
              </span>
            </a>

            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 rounded-3xl border border-line bg-ink-soft p-5 transition hover:border-accent/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent-bright">
                <LinkedInIcon size={18} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-snow">LinkedIn</span>
                <span className="mt-1 block text-sm text-mist">Connect with MANDRIP</span>
              </span>
            </a>
          </motion.aside>

          <motion.form
            onSubmit={onSubmit}
            noValidate
            className="rounded-[2rem] border border-line bg-ink-soft p-6 sm:p-8"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            {/* Honeypot field for spam bots — hidden from real users */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={onChange}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" error={errors.fullName}>
                <input
                  className={inputClass}
                  name="fullName"
                  value={form.fullName}
                  onChange={onChange}
                  autoComplete="name"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Business Email" error={errors.email}>
                <input
                  className={inputClass}
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  autoComplete="email"
                  placeholder="you@company.com"
                />
              </Field>
              <Field label="Phone Number" error={errors.phone}>
                <input
                  className={inputClass}
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  autoComplete="tel"
                  placeholder="+91 ..."
                />
              </Field>
              <Field label="Company Name" error={errors.company}>
                <input
                  className={inputClass}
                  name="company"
                  value={form.company}
                  onChange={onChange}
                  autoComplete="organization"
                  placeholder="Optional"
                />
              </Field>
              <Field label="Service Required" error={errors.service}>
                <select
                  className={inputClass}
                  name="service"
                  value={form.service}
                  onChange={onChange}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Estimated Budget" error={errors.budget}>
                <select
                  className={inputClass}
                  name="budget"
                  value={form.budget}
                  onChange={onChange}
                >
                  <option value="">Select a range</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Project Description" error={errors.description}>
                <textarea
                  className={`${inputClass} min-h-32 resize-y`}
                  name="description"
                  value={form.description}
                  onChange={onChange}
                  placeholder="Tell us about your goals, timeline and anything important for the project."
                />
              </Field>
            </div>

            {status === 'success' && (
              <div
                className="mt-5 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300"
                role="status"
              >
                {statusMessage}
              </div>
            )}

            {(status === 'error' || status === 'failed') && statusMessage && (
              <div
                className="mt-5 rounded-2xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-300"
                role="alert"
              >
                {statusMessage}
              </div>
            )}

            {status === 'sending' && (
              <div
                className="mt-5 rounded-2xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-accent-bright"
                role="status"
              >
                Sending your project details...
              </div>
            )}

            <div className="mt-7">
              <Button type="submit" className="w-full sm:w-auto" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Project Details'}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
