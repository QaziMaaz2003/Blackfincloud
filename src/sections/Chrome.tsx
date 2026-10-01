import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Column, Row, Section } from '../components/divi'
import { Icon } from '../components/modules/Icon'
import { contact, footer, mapsLink, nav } from '../content/site'

function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`bf-logo ${light ? 'bf-logo--light' : ''}`} aria-label="Blackfin Cloud Services home">
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="var(--bf-accent)" />
        <path d="M6 22c4-1 7-5 8-12 3 3 6 7 12 8-5 1-8 4-10 8-1-3-4-4-10-4Z" fill="#fff" />
      </svg>
      <span>
        Blackfin<em>Cloud</em>
      </span>
    </Link>
  )
}

/** Divi Theme Builder > Global Header */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`bf-header ${scrolled ? 'bf-header--solid' : ''} ${open ? 'bf-header--open' : ''}`}>
      <div className="bf-header__inner">
        <Logo />
        <nav className="bf-nav" aria-label="Primary">
          {nav.map((n) => (
            <NavLink key={n.label} to={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </NavLink>
          ))}
          <a
            className="et_pb_button et_pb_button--primary bf-nav__cta"
            href={contact.calendly}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Book Consultation
          </a>
        </nav>
        <button
          className="bf-burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          type="button"
        >
          <Icon name={open ? 'x' : 'menu'} />
        </button>
      </div>
    </header>
  )
}

/** Divi Theme Builder > Global Footer */
export function Footer() {
  return (
    <footer>
      <Section tone="dark" padding="md" className="bf-footer">
        <Row layout="2_3,1_3,1_3,1_3" className="bf-footer__row">
          <Column>
            <Logo light />
            <p className="bf-footer__blurb">{footer.blurb}</p>
            <div className="bf-footer__social">
              <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Icon name="linkedin" size={18} />
              </a>
              <a href={`mailto:${contact.email}`} aria-label="Email">
                <Icon name="mail" size={18} />
              </a>
            </div>
          </Column>
          <Column>
            <h4>Explore</h4>
            <ul className="bf-footer__list bf-footer__list--plain bf-footer__links">
              {nav.map((n) => (
                <li key={n.label}>
                  <Link to={n.href}>{n.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </Column>
          <Column>
            <h4>Contact</h4>
            <ul className="bf-footer__list">
              <li>
                <Icon name="pin" size={16} />
                <a href={mapsLink(contact.address)} target="_blank" rel="noreferrer">
                  {contact.address}
                </a>
              </li>
              {contact.otherOffices.map((o) => (
                <li key={o.address} className="bf-footer__office">
                  <Icon name="pin" size={16} />
                  <span>
                    <em>{o.name}</em>
                    <a href={mapsLink(o.address)} target="_blank" rel="noreferrer">
                      {o.address}
                    </a>
                  </span>
                </li>
              ))}
              <li>
                <Icon name="phone" size={16} />
                <a href={contact.phoneHref}>{contact.phone}</a>
              </li>
              <li>
                <Icon name="mail" size={16} />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
            </ul>
          </Column>
          <Column>
            <h4>Government</h4>
            <ul className="bf-footer__list bf-footer__list--plain">
              {footer.government.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <h4 className="bf-footer__subhead">NAICS</h4>
            <ul className="bf-footer__list bf-footer__list--plain">
              {footer.naics.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </Column>
        </Row>
        <div className="et_pb_row bf-footer__legal">
          <p>{footer.legal}</p>
          <p className="bf-footer__policies">
            {footer.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </p>
        </div>
      </Section>
    </footer>
  )
}
