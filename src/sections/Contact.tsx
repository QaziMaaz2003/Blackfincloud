import { useState, type FormEvent } from 'react'
import { Column, Row, Section } from '../components/divi'
import { Heading } from '../components/modules'
import { Icon } from '../components/modules/Icon'
import { contact, form, mapsLink } from '../content/site'

/** Divi Contact Form module (or Fluent/WPForms). Front-end only — no backend wired. */
function DiscoveryForm() {
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    const next: Record<string, string> = {}
    if (!String(d.get('name') ?? '').trim()) next.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(String(d.get('email') ?? ''))) next.email = 'Please enter a valid work email.'
    setErrors(next)
    if (Object.keys(next).length === 0) setSent(true)
  }

  if (sent) {
    return (
      <div className="et_pb_contact_form bf-form bf-form--sent" role="status">
        <Icon name="check" size={32} />
        <p>{form.success}</p>
      </div>
    )
  }

  return (
    <form className="et_pb_contact_form bf-form" onSubmit={onSubmit} noValidate data-reveal>
      <div className="bf-form__grid">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" placeholder="Jane Smith" aria-invalid={!!errors.name} />
          {errors.name && <em role="alert">{errors.name}</em>}
        </label>
        <label>
          <span>Work email</span>
          <input name="email" type="email" autoComplete="email" placeholder="jane@agency.gov" aria-invalid={!!errors.email} />
          {errors.email && <em role="alert">{errors.email}</em>}
        </label>
        <label>
          <span>Organization type</span>
          <select name="orgType" defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            {form.orgTypes.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Target project</span>
          <select name="project" defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            {form.projects.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label className="bf-form__wide">
          <span>Preferred consultation date</span>
          <input name="date" type="date" />
        </label>
      </div>
      <button className="et_pb_button et_pb_button--primary bf-form__submit" type="submit">
        {form.submit}
      </button>
      <p className="bf-form__reassure">{form.reassurance}</p>
    </form>
  )
}

export function Contact() {
  return (
    <Section id="contact" tone="light">
      <Row layout="1_2,1_2" align="start" className="bf-contact">
        <Column>
          <Heading eyebrow={form.eyebrow} title={form.title} text={form.text} align="left" />
          <ul className="bf-contact__list">
            <li>
              <Icon name="phone" size={18} />
              <a href={contact.phoneHref}>{contact.phone}</a>
            </li>
            <li>
              <Icon name="mail" size={18} />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <Icon name="pin" size={18} />
              <a href={mapsLink(contact.address)} target="_blank" rel="noreferrer">
                {contact.address}
              </a>
            </li>
            {contact.otherOffices.map((o) => (
              <li key={o.address} className="bf-contact__office">
                <Icon name="pin" size={18} />
                <span>
                  <em>{o.name}</em>
                  <a href={mapsLink(o.address)} target="_blank" rel="noreferrer">
                    {o.address}
                  </a>
                </span>
              </li>
            ))}
          </ul>
          <p className="bf-contact__note">{form.note}</p>
          <p className="bf-contact__note">
            Prefer to pick a time now? <a href={contact.calendly} target="_blank" rel="noreferrer">Book on our calendar →</a>
          </p>
        </Column>
        <Column>
          <DiscoveryForm />
        </Column>
      </Row>
    </Section>
  )
}
