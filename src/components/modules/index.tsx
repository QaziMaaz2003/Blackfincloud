import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from './Icon'

/* ---------- Divi Text / Heading module ---------- */
export function Heading({
  eyebrow,
  title,
  text,
  align = 'center',
  invert = false,
  as: Tag = 'h2',
}: {
  eyebrow?: string
  title: string
  text?: string
  align?: 'left' | 'center'
  invert?: boolean
  as?: 'h1' | 'h2'
}) {
  return (
    <div className={`et_pb_text et_pb_heading et_pb_text_align_${align} ${invert ? 'et_pb_invert' : ''}`} data-reveal>
      {eyebrow && <p className="et_pb_eyebrow">{eyebrow}</p>}
      <Tag>{title}</Tag>
      {text && <p className="et_pb_lead">{text}</p>}
    </div>
  )
}

export function Text({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`et_pb_text ${className}`}>{children}</div>
}

/* ---------- Divi Button module ---------- */
export function Button({
  href,
  children,
  variant = 'primary',
  external,
}: {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'light' | 'outline'
  external?: boolean
}) {
  const className = `et_pb_button et_pb_button--${variant}`
  // Internal pages use the router; tel:, mailto: and external URLs stay plain anchors
  if (href.startsWith('/') && !external) {
    return (
      <Link className={className} to={href}>
        {children}
      </Link>
    )
  }
  return (
    <a className={className} href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {children}
    </a>
  )
}

/* ---------- Divi Image module ---------- */
export function Image({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`et_pb_image ${className}`} data-reveal>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  )
}

/* ---------- Divi Blurb module ---------- */
export function Blurb({
  icon,
  title,
  tag,
  text,
  image,
  meta,
  number,
}: {
  icon?: string
  title: string
  tag?: string
  text: string
  image?: string
  meta?: string
  number?: string
}) {
  return (
    <article className="et_pb_blurb" data-reveal>
      {image && (
        <div className="et_pb_blurb_image">
          <img src={image} alt="" loading="lazy" />
        </div>
      )}
      <div className="et_pb_blurb_content">
        {icon && (
          <span className="et_pb_main_blurb_image">
            <Icon name={icon} size={26} />
          </span>
        )}
        {number && <span className="et_pb_blurb_number">{number}</span>}
        {meta && <p className="et_pb_blurb_meta">{meta}</p>}
        <h3>{title}</h3>
        {tag && <p className="et_pb_blurb_tag">{tag}</p>}
        <p>{text}</p>
      </div>
    </article>
  )
}

/* ---------- Divi Number Counter module ---------- */
export function Counter({
  value,
  prefix = '',
  suffix = '',
  text,
  label,
}: {
  value?: number
  prefix?: string
  suffix?: string
  text?: string
  label: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isYear = value !== undefined && value > 1900 // years are shown as-is, not counted up
  const [n, setN] = useState(isYear ? value : 0)

  useEffect(() => {
    if (value === undefined || isYear || !ref.current) return
    let raf = 0
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (t: number) => {
          const p = Math.min((t - start) / 1200, 1)
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    io.observe(ref.current)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, isYear])

  return (
    <div className="et_pb_number_counter" ref={ref}>
      <span className="percent">
        {prefix}
        {text ?? n}
        {value !== undefined && suffix}
      </span>
      <span className="title">{label}</span>
    </div>
  )
}

/* ---------- Divi Testimonial module ---------- */
export function Testimonial({ quote, author, meta }: { quote: string; author: string; meta: string }) {
  return (
    <blockquote className="et_pb_testimonial" data-reveal>
      <p className="et_pb_testimonial_mark" aria-hidden="true">
        “
      </p>
      <p className="et_pb_testimonial_quote">{quote}</p>
      <footer>
        <strong>{author}</strong>
        <span>{meta}</span>
      </footer>
    </blockquote>
  )
}

/* ---------- Divi Toggle / Accordion module ---------- */
export function Toggle({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={`et_pb_toggle ${open ? 'et_pb_toggle_open' : 'et_pb_toggle_close'}`} data-reveal>
      <button className="et_pb_toggle_title" aria-expanded={open} onClick={() => setOpen(!open)} type="button">
        <span>{q}</span>
        <span className="et_pb_toggle_icon" aria-hidden="true" />
      </button>
      <div className="et_pb_toggle_content" hidden={!open}>
        <p>{a}</p>
      </div>
    </div>
  )
}
