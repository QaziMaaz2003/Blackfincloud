import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Column, Row, Section } from '../components/divi'
import { Button, Counter, Heading } from '../components/modules'
import { Icon } from '../components/modules/Icon'
import { contact, productsBand, productsIntro, type Product } from '../content/site'

/* Composed from Divi Section > Row > Column > Module. See docs/DIVI-MAPPING.md → Products. */

/** Divi: Image module with "Open in Lightbox" — here a button that opens the product one-sheet. */
export function OneSheetButton({ product }: { product: Product }) {
  const [open, setOpen] = useState(false)
  const close = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    close.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <button type="button" className="et_pb_button et_pb_button--outline" onClick={() => setOpen(true)}>
        <Icon name="doc" size={18} /> View one-sheet
      </button>
      {open && (
        <div className="bf-modal" role="dialog" aria-modal="true" aria-label={`${product.name} one-sheet`} onClick={() => setOpen(false)}>
          <div className="bf-modal__box" onClick={(e) => e.stopPropagation()}>
            <div className="bf-modal__bar">
              <strong>{product.name}</strong>
              <a href={product.sheet} download className="bf-modal__dl">
                Download
              </a>
              <button ref={close} type="button" className="bf-modal__close" onClick={() => setOpen(false)} aria-label="Close one-sheet">
                <Icon name="x" size={20} />
              </button>
            </div>
            <div className="bf-modal__scroll">
              <img src={product.sheet} alt={product.sheetAlt} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

/** Dark band of "less than N days" figures. Divi: Row of Number Counter modules. */
export function DeploymentBand() {
  return (
    <Section tone="dark" padding="sm" className="bf-statsband">
      <Row layout="1_4,1_4,1_4,1_4">
        {productsBand.map((b) => (
          <Column key={b.label}>
            <Counter text={b.text} label={b.label} />
          </Column>
        ))}
      </Row>
    </Section>
  )
}

/** Overview cards with in-page links ("See Geospatial Management"). Divi: Blurb modules with a link. */
export function ProductOverview({
  items,
  eyebrow = productsIntro.eyebrow,
  title = productsIntro.title,
  text = productsIntro.text,
  tone = 'light',
  linkTo,
  more,
}: {
  items: Product[]
  eyebrow?: string
  title?: string
  text?: string
  tone?: 'light' | 'alt'
  /** When set, card links go to the Products page (used on Home) instead of in-page anchors */
  linkTo?: string
  more?: { label: string; href: string }
}) {
  return (
    <Section tone={tone} padding="md">
      <Row>
        <Column>
          {!linkTo && <img className="bf-brandmark bf-brandmark--center" src="/logo-dark.png" alt="Blackfin Cloud Services" width="96" height="81" />}
          <Heading eyebrow={eyebrow} title={title} text={text} />
        </Column>
      </Row>
      <Row layout="1_3,1_3,1_3" className="bf-cards">
        {items.map((p) => (
          <Column key={p.slug}>
            <article className="bf-pcard" data-reveal>
              <span className="bf-pcard__num">{p.number}</span>
              <h3>{p.name}</h3>
              <p>{p.short}</p>
              <div className="bf-pcard__foot">
                <p className="bf-pcard__time">
                  <Icon name="clock" size={16} /> {p.deployment}
                </p>
                {linkTo ? (
                  <Link className="bf-arrowlink" to={`${linkTo}#${p.slug}`}>
                    See {p.name} <Icon name="arrow" size={16} />
                  </Link>
                ) : (
                  <a className="bf-arrowlink" href={`#${p.slug}`}>
                    See {p.name} <Icon name="arrow" size={16} />
                  </a>
                )}
              </div>
            </article>
          </Column>
        ))}
      </Row>
      {more && (
        <Row>
          <Column>
            <div className="bf-center">
              <Button href={more.href} variant="outline">
                {more.label}
              </Button>
            </div>
          </Column>
        </Row>
      )}
    </Section>
  )
}

/** Framed product screenshots. Divi: Image module(s) with a box shadow. */
function Screens({ images, name, badge }: { images: string[]; name: string; badge: Product }) {
  return (
    <div className="bf-imgwrap">
      <div className={`bf-screen bf-screen--${images.length}`} data-reveal>
        <div className="bf-screen__bar" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="bf-screen__body">
          {images.map((src) => (
            <img key={src} src={src} alt={`${name} screenshot`} loading="lazy" />
          ))}
        </div>
      </div>
      <div className="bf-badge">
        <strong>{badge.deployment}</strong>
        <span>{badge.deploymentLabel.toLowerCase()}</span>
      </div>
    </div>
  )
}

/** One product: copy + screenshots, then its feature groups. */
export function ProductSection({ product, tone, reverse }: { product: Product; tone: 'light' | 'alt'; reverse: boolean }) {
  const cols = product.groups.length === 4 ? 4 : 3
  const copy = (
    <Column>
      <div className="et_pb_text et_pb_text_align_left">
        <p className="et_pb_eyebrow">Product {product.number}</p>
        <h2 className="bf-h3">{product.name}</h2>
        {product.tagline && <p className="bf-tagline">{product.tagline}</p>}
        <p className="et_pb_lead">{product.lead}</p>
        <ul className="bf-checks">
          {product.highlights.map((h) => (
            <li key={h}>
              <Icon name="check" size={18} />
              {h}
            </li>
          ))}
        </ul>
        <div className="et_pb_button_module bf-product__actions">
          <Button href={contact.calendly}>Schedule your 30 minute demo</Button>
          <OneSheetButton product={product} />
        </div>
      </div>
    </Column>
  )
  const pic = (
    <Column>
      <Screens images={product.images} name={product.name} badge={product} />
    </Column>
  )
  return (
    <Section id={product.slug} tone={tone} padding="md">
      <Row layout="1_2,1_2" align="center" className={reverse ? 'et_pb_row--reverse' : ''}>
        {reverse ? (
          <>
            {pic}
            {copy}
          </>
        ) : (
          <>
            {copy}
            {pic}
          </>
        )}
      </Row>
      <Row layout={cols === 4 ? '1_4,1_4,1_4,1_4' : '1_3,1_3,1_3'} className="bf-groups">
        {product.groups.map((g) => (
          <Column key={g.title}>
            <div className="bf-group" data-reveal>
              <h3 className="bf-group__title">
                <span>
                  <Icon name={g.icon} size={20} />
                </span>
                {g.title}
              </h3>
              {g.ordered ? (
                <ol className="bf-group__list bf-group__list--ordered">
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ol>
              ) : (
                <ul className="bf-group__list">
                  {g.items.map((i) => (
                    <li key={i}>
                      <Icon name="check" size={16} />
                      {i}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Column>
        ))}
      </Row>
    </Section>
  )
}
