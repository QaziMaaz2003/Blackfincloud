import { Column, Row, Section } from '../components/divi'
import { Button, Counter, Heading, Image, Text } from '../components/modules'
import { Icon } from '../components/modules/Icon'
import { cta } from '../content/site'

/** Divi: Fullwidth Header module (or Section with background image + overlay) at the top of every inner page. */
export function PageHero({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string
  title: string
  text: string
  image: string
}) {
  return (
    <Section tone="image" bgImage={image} className="bf-hero bf-hero--page" padding="lg">
      <Row>
        <Column>
          <div className="bf-hero__copy">
            <p className="et_pb_eyebrow et_pb_eyebrow--light">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="bf-hero__sub">{text}</p>
          </div>
        </Column>
      </Row>
    </Section>
  )
}

/** Divi: Section + Row 1_2,1_2 with Image + Text modules. `reverse` swaps sides. */
export function Split({
  id,
  eyebrow,
  title,
  text,
  paragraphs,
  points,
  tags,
  badge,
  image,
  imageAlt = '',
  reverse = false,
  tone = 'light',
  cta: ctaLink,
}: {
  id?: string
  eyebrow?: string
  title: string
  text?: string
  paragraphs?: string[]
  points?: string[]
  tags?: string[]
  badge?: { value: string; label: string }
  image: string
  imageAlt?: string
  reverse?: boolean
  tone?: 'light' | 'alt'
  cta?: { label: string; href: string }
}) {
  const copy = (
    <Column>
      <Text className="et_pb_text_align_left">
        {eyebrow && <p className="et_pb_eyebrow">{eyebrow}</p>}
        <h2 className="bf-h3">{title}</h2>
        {text && <p className="et_pb_lead">{text}</p>}
        {paragraphs?.map((p) => (
          <p key={p}>{p}</p>
        ))}
        {points && (
          <ul className="bf-checks">
            {points.map((pt) => (
              <li key={pt}>
                <Icon name="check" size={18} />
                {pt}
              </li>
            ))}
          </ul>
        )}
        {tags && (
          <ul className="bf-tags">
            {tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
        {ctaLink && <Button href={ctaLink.href}>{ctaLink.label}</Button>}
      </Text>
    </Column>
  )
  const pic = (
    <Column>
      <div className="bf-imgwrap">
        <Image src={image} alt={imageAlt} className="et_pb_image--rounded" />
        {badge && (
          <div className="bf-badge">
            <strong>{badge.value}</strong>
            <span>{badge.label}</span>
          </div>
        )}
      </div>
    </Column>
  )
  return (
    <Section id={id} tone={tone} padding="md">
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
    </Section>
  )
}

/** Divi: Section (dark) + Text + 2 Buttons. Save as a Divi Library layout / Global module and reuse on every page. */
export function CtaBanner() {
  return (
    <Section tone="dark" padding="md" className="bf-cta">
      <Row>
        <Column>
          <Heading title={cta.title} text={cta.text} invert />
          <div className="et_pb_button_module bf-cta__buttons">
            <Button href={cta.primary.href}>{cta.primary.label}</Button>
            <Button href={cta.secondary.href} variant="ghost">
              {cta.secondary.label}
            </Button>
          </div>
        </Column>
      </Row>
    </Section>
  )
}

/** Divi: Row of Number Counter modules. */
export function StatsBand({
  stats,
}: {
  stats: { value: number; prefix?: string; suffix?: string; label: string }[]
}) {
  return (
    <Section tone="dark" padding="sm" className="bf-statsband">
      <Row layout={stats.map(() => '1_4').join(',')}>
        {stats.map((s) => (
          <Column key={s.label}>
            <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} label={s.label} />
          </Column>
        ))}
      </Row>
    </Section>
  )
}

export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="bf-chips bf-chips--center">
      {items.map((c) => (
        <li key={c}>{c}</li>
      ))}
    </ul>
  )
}
