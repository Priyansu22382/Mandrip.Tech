import { Link } from 'react-router-dom'
import { Mail, MessageCircle } from 'lucide-react'
import Logo from './Logo'
import { LinkedInIcon } from './icons'
import { services } from '../data/services'
import { contactInfo } from '../data/pricing'
import { footerLinks } from '../data/routes'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-ink-soft">
      <div className="container-max section-pad !pb-12 !pt-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
              MANDRIP Digital Technologies builds websites, web applications,
              e-commerce platforms and business systems — then maintains and
              scales them for ambitious companies.
            </p>
            <p className="mt-6 text-sm font-semibold tracking-wide text-accent">
              We Build. We Maintain. We Scale.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.16em] text-snow uppercase">
              Navigate
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-mist transition-colors hover:text-snow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.16em] text-snow uppercase">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 8).map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-sm text-mist transition-colors hover:text-snow"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.16em] text-snow uppercase">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-mist">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-snow"
                >
                  <Mail size={15} />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-snow"
                >
                  <MessageCircle size={15} />
                  {contactInfo.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-snow"
                >
                  <LinkedInIcon size={15} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-8 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} MANDRIP Digital Technologies. All rights reserved.</p>
          <p className="text-xs tracking-wide uppercase">Premium Digital Solutions</p>
        </div>
      </div>
    </footer>
  )
}
