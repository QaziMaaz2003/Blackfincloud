import type { ReactNode } from 'react'
import { Column, Row, Section } from '../components/divi'
import { Blurb, Button, Heading, Image, Text } from '../components/modules'
import { Icon } from '../components/modules/Icon'
import {
  alsoDelivered,
  caseFacts,
  ecosystem,
  gallery,
  industryDetail,
  mission,
  timeline,
  timelineWeeks,
} from '../content/site'

/* Every block below is composed from Section > Row > Column > Module so it maps onto Divi. */

type Tone = 'light' | 'alt' | 'dark'
const LAYOUT: Record<number, string> = { 2: '1_2,1_2', 3: '1_3,1_3,1_3', 4: '1_4,1_4,1_4,1_4' }

function chunk<T>(items: T[], size: number): T[][] {
  const out: T[][] = []
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size))
  return out
}

/** Grid of Blurbs; rows are padded so a short last row keeps card widths. */
function BlurbRows({ items, cols }: { items: BlurbItem[]; cols: 2 | 3 | 4 }) {
  return (
    <>
      {chunk(items, cols).map((rowItems, r) => (
        <Row key={r} layout={LAYOUT[cols]} className="bf-cards">
          {rowItems.map((it) => (
            <Column key={it.title}>
              <Blurb {...it} />
            </Column>
          ))}
          {Array.from({ length: cols - rowItems.length }).map((_, i) => (
            <Column key={`pad${i}`} className="bf-pad">
              <span />
            </Column>
          ))}
        </Row>
      ))}
    </>
  )
}

interface BlurbItem {
  icon?: string
  title: string
  text: string
  image?: string
  number?: string
  tag?: string
  meta?: string
}

/** Heading + grid of icon (or image) Blurbs. Divi: Text module + rows of Blurb modules. */
export function CardGrid({
  eyebrow,
  title,
  text,
  items,
  cols = 3,
  tone = 'light',
  id,
}: {
  eyebrow?: string
  title: string
  text?: string
  items: BlurbItem[]
  cols?: 2 | 3 | 4
  tone?: Tone
  id?: string
}) {
  return (
    <Section id={id} tone={tone}>
      <Row>
        <Column>
          <Heading eyebrow={eyebrow} title={title} text={text} invert={tone === 'dark'} />
        </Column>
      </Row>
      <BlurbRows items={items} cols={cols} />
    </Section>
  )
}

/** Big pull-quote band. Divi: Section with gradient bg + Text module. */
export function MissionBand() {
  return (
    <Section tone="dark" padding="md" className="bf-mission">
      <Row>
        <Column>
          <div className="bf-mission__inner" data-reveal>
            <span className="bf-mission__mark" aria-hidden="true">
              “
            </span>
            <p>{mission.quote}</p>
            <cite>{mission.cite}</cite>
          </div>
        </Column>
      </Row>
    </Section>
  )
}

/** Vertical alternating timeline. Divi: Section with a Code module (or Blurbs on a styled column). */
export function Timeline() {
  return (
    <Section tone="alt" id="journey">
      <Row>
        <Column>
          <Heading eyebrow={timeline.eyebrow} title={timeline.title} />
        </Column>
      </Row>
      <Row>
        <Column>
          <ol className="bf-timeline">
            {timeline.items.map((t, i) => (
              <li key={t.year} className={i % 2 ? 'is-right' : ''} data-reveal>
                <span className="bf-timeline__dot" aria-hidden="true" />
                <div className="bf-timeline__card">
                  <span className="bf-timeline__year">{t.year}</span>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Column>
      </Row>
    </Section>
  )
}

/** Photo mosaic with captions. Divi: Gallery module (grid) or Row of Image modules. */
export function Gallery({ tone = 'light' }: { tone?: 'light' | 'alt' }) {
  return (
    <Section tone={tone} id="gallery">
      <Row>
        <Column>
          <Heading eyebrow={gallery.eyebrow} title={gallery.title} text={gallery.text} />
        </Column>
      </Row>
      <Row>
        <Column>
          <div className="bf-mosaic">
            {gallery.images.map((g) => (
              <figure key={g.src} className={`bf-mosaic__item ${g.tall ? 'is-tall' : ''} ${g.wide ? 'is-wide' : ''}`} data-reveal>
                <img src={g.src} alt={g.alt} loading="lazy" />
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </Column>
      </Row>
    </Section>
  )
}

/** Capture → Automate → Engage → Analyze flow. Divi: Code module (HTML/CSS), documented in DIVI-MAPPING. */
export function Ecosystem({ tone = 'alt', more }: { tone?: 'light' | 'alt'; more?: { label: string; href: string } }) {
  return (
    <Section tone={tone} id="ecosystem">
      <Row>
        <Column>
          <Heading eyebrow={ecosystem.eyebrow} title={ecosystem.title} text={ecosystem.text} />
        </Column>
      </Row>
      <Row>
        <Column>
          <div className="bf-flow" data-reveal>
            {ecosystem.nodes.map((n, i) => (
              <div className="bf-flow__step" key={n.name}>
                <div className="bf-flow__node">
                  <span className="bf-flow__icon">
                    <Icon name={n.icon} size={28} />
                  </span>
                  <span className="bf-flow__role">{n.role}</span>
                  <strong>{n.name}</strong>
                  <p>{n.text}</p>
                </div>
                {i < ecosystem.nodes.length - 1 && (
                  <span className="bf-flow__arrow" aria-hidden="true">
                    <Icon name="arrow" size={22} />
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="bf-flow__base" data-reveal>
            <Icon name="layers" size={18} />
            {ecosystem.foundation}
          </p>
          {more && (
            <div className="bf-center">
              <Button href={more.href} variant="outline">
                {more.label}
              </Button>
            </div>
          )}
        </Column>
      </Row>
    </Section>
  )
}

/** Row of fact tiles (label / value). Divi: Blurb or Text modules in a 1_4 row. */
export function FactTiles({ items }: { items: { label: string; value: string }[] }) {
  return (
    <dl className="bf-facts">
      {items.map((f) => (
        <div key={f.label}>
          <dt>{f.label}</dt>
          <dd>{f.value}</dd>
        </div>
      ))}
    </dl>
  )
}

/** Case study: copy + facts on one side, image on the other. */
export function CaseStudy({
  client,
  meta,
  title,
  text,
  image,
  points,
  reverse,
  tone,
}: {
  client: string
  meta: string
  title: string
  text: string
  image: string
  points: string[]
  reverse: boolean
  tone: 'light' | 'alt'
}) {
  const copy = (
    <Column>
      <Text className="et_pb_text_align_left">
        <p className="et_pb_eyebrow">{meta ? `${client} · ${meta}` : client}</p>
        <h2 className="bf-h3">{title}</h2>
        <p className="et_pb_lead">{text}</p>
        <ul className="bf-checks">
          {points.map((p) => (
            <li key={p}>
              <Icon name="check" size={18} />
              {p}
            </li>
          ))}
        </ul>
        <Button href="/contact">Start a similar project</Button>
      </Text>
    </Column>
  )
  const pic = (
    <Column>
      <div className="bf-imgwrap">
        <Image src={image} alt={client} className="et_pb_image--rounded" />
      </div>
    </Column>
  )
  return (
    <Section tone={tone} padding="md">
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
      <Row>
        <Column>
          <FactTiles items={caseFacts[client] ?? []} />
        </Column>
      </Row>
    </Section>
  )
}

/** Two side-by-side panels: challenges vs what we deliver. */
export function IndustryBlock({
  title,
  text,
  image,
  reverse,
  tone,
  id,
}: {
  title: string
  text: string
  image: string
  reverse: boolean
  tone: 'light' | 'alt'
  id: string
}) {
  const d = industryDetail[title]
  const copy = (
    <Column>
      <Text className="et_pb_text_align_left">
        <p className="et_pb_eyebrow">Industry</p>
        <h2 className="bf-h3">{title}</h2>
        <p className="et_pb_lead">{text}</p>
        <ul className="bf-tags">
          {d.solutions.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <Button href="/contact">Talk to a specialist</Button>
      </Text>
    </Column>
  )
  const pic = (
    <Column>
      <div className="bf-imgwrap">
        <Image src={image} alt={title} className="et_pb_image--rounded" />
        {d.badge && (
          <div className="bf-badge">
            <strong>{d.badge.value}</strong>
            <span>{d.badge.label}</span>
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
      <Row layout="1_2,1_2" className="bf-duo">
        <Column>
          <div className="bf-panel bf-panel--problem" data-reveal>
            <h3 className="bf-h4">
              <Icon name="x" size={16} /> Common challenges
            </h3>
            <ul className="bf-checks bf-checks--x">
              {d.challenges.map((c) => (
                <li key={c}>
                  <Icon name="x" size={18} />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Column>
        <Column>
          <div className="bf-panel bf-panel--solution" data-reveal>
            <h3 className="bf-h4">
              <Icon name="check" size={16} /> What we deliver
            </h3>
            <ul className="bf-checks">
              {d.delivers.map((c) => (
                <li key={c}>
                  <Icon name="check" size={18} />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Column>
      </Row>
    </Section>
  )
}

/** Horizontal 3-step progress graphic. Divi: Code module. */
export function Stepper({ steps }: { steps: { n: string; title: string; badge: string }[] }) {
  return (
    <Section tone="light" padding="sm" className="bf-stepper-section">
      <Row>
        <Column>
          <ol className="bf-stepper" data-reveal>
            {steps.map((s) => (
              <li key={s.n}>
                <span className="bf-stepper__n">{s.n}</span>
                <strong>{s.title}</strong>
                <em>{s.badge}</em>
              </li>
            ))}
          </ol>
        </Column>
      </Row>
    </Section>
  )
}

/** "You bring / We deliver" panels for a process step. */
export function BringDeliver({ bring, deliver }: { bring: string[]; deliver: string[] }) {
  return (
    <div className="bf-duo bf-duo--inline">
      <div className="bf-panel">
        <h3 className="bf-h4">You bring</h3>
        <ul className="bf-checks">
          {bring.map((b) => (
            <li key={b}>
              <Icon name="check" size={18} />
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className="bf-panel bf-panel--solution">
        <h3 className="bf-h4">We deliver</h3>
        <ul className="bf-checks">
          {deliver.map((b) => (
            <li key={b}>
              <Icon name="check" size={18} />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}


/** Process step: copy + image, then "You bring / We deliver" panels. */
export function StepBlock({
  n,
  title,
  text,
  points,
  image,
  badge,
  bring,
  deliver,
  reverse,
  tone,
}: {
  n: string
  title: string
  text: string
  points: string[]
  image: string
  badge: string
  bring: string[]
  deliver: string[]
  reverse: boolean
  tone: 'light' | 'alt'
}) {
  const copy = (
    <Column>
      <Text className="et_pb_text_align_left">
        <p className="et_pb_eyebrow">Step {n}</p>
        <h2 className="bf-h3">{title}</h2>
        <p className="et_pb_lead">{text}</p>
        <ul className="bf-checks">
          {points.map((p) => (
            <li key={p}>
              <Icon name="check" size={18} />
              {p}
            </li>
          ))}
        </ul>
      </Text>
    </Column>
  )
  const pic = (
    <Column>
      <div className="bf-imgwrap">
        <Image src={image} alt={title} className="et_pb_image--rounded" />
        <div className="bf-badge bf-badge--num">
          <strong>{n}</strong>
          <span>{badge}</span>
        </div>
      </div>
    </Column>
  )
  return (
    <Section tone={tone} padding="md">
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
      <Row>
        <Column>
          <BringDeliver bring={bring} deliver={deliver} />
        </Column>
      </Row>
    </Section>
  )
}

/** Gantt-style bars. Divi: Code module. */
export function WeekBars({ tone = 'alt' }: { tone?: 'light' | 'alt' }) {
  return (
    <Section tone={tone}>
      <Row>
        <Column>
          <Heading eyebrow={timelineWeeks.eyebrow} title={timelineWeeks.title} text={timelineWeeks.text} />
        </Column>
      </Row>
      <Row>
        <Column>
          <div className="bf-weeks" data-reveal>
            <div className="bf-weeks__axis" aria-hidden="true">
              {['Wk 1', 'Wk 3', 'Wk 5', 'Wk 7', 'Wk 9', 'Wk 10+'].map((w) => (
                <span key={w}>{w}</span>
              ))}
            </div>
            {timelineWeeks.bars.map((b) => (
              <div className="bf-weeks__row" key={b.label}>
                <span className="bf-weeks__label">{b.label}</span>
                <div className="bf-weeks__track">
                  <span className="bf-weeks__bar" style={{ left: `${b.start}%`, width: `${b.width}%` }}>
                    Weeks {b.span}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Column>
      </Row>
    </Section>
  )
}

/** Credential tiles (CMAS, CAGE, UEI, DUNS). */
export function CredentialTiles({
  eyebrow,
  title,
  items,
  tone = 'light',
}: {
  eyebrow: string
  title: string
  items: { label: string; value: string }[]
  tone?: 'light' | 'alt'
}) {
  return (
    <Section tone={tone} padding="md">
      <Row>
        <Column>
          <Heading eyebrow={eyebrow} title={title} />
        </Column>
      </Row>
      <Row layout="1_4,1_4,1_4,1_4" className="bf-cards">
        {items.map((c) => (
          <Column key={c.label}>
            <div className="bf-cred" data-reveal>
              <Icon name="shield" size={22} />
              <span>{c.label}</span>
              <strong>{c.value}</strong>
            </div>
          </Column>
        ))}
      </Row>
    </Section>
  )
}

/** Numbered steps on light or dark. */
export function NumberedSteps({
  eyebrow,
  title,
  items,
  tone = 'dark',
}: {
  eyebrow: string
  title: string
  items: { n: string; title: string; text: string }[]
  tone?: 'light' | 'alt' | 'dark'
}) {
  const cols = items.length === 4 ? 4 : 3
  return (
    <Section tone={tone}>
      <Row>
        <Column>
          <Heading eyebrow={eyebrow} title={title} invert={tone === 'dark'} />
        </Column>
      </Row>
      <Row layout={LAYOUT[cols]} className="bf-steps">
        {items.map((s) => (
          <Column key={s.n}>
            <Blurb number={s.n} title={s.title} text={s.text} />
          </Column>
        ))}
      </Row>
    </Section>
  )
}

/** Cards that are links/actions (contact methods). */
export function ContactCards({
  items,
}: {
  items: { icon: string; title: string; text: string; value: string; href: string }[]
}) {
  return (
    <Section tone="alt" padding="md" className="bf-contactcards">
      <Row layout="1_4,1_4,1_4,1_4" className="bf-cards">
        {items.map((c) => (
          <Column key={c.title}>
            <a className="bf-action" href={c.href} {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})} data-reveal>
              <span className="et_pb_main_blurb_image">
                <Icon name={c.icon} size={26} />
              </span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <strong>{c.value}</strong>
            </a>
          </Column>
        ))}
      </Row>
    </Section>
  )
}

/** Chips list on a dark or light background. */
export function TagCloud({ items }: { items: string[] }) {
  return (
    <ul className="bf-tags bf-tags--center">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}

export function AlsoDelivered() {
  return <CardGrid eyebrow={alsoDelivered.eyebrow} title={alsoDelivered.title} items={alsoDelivered.items} cols={4} tone="light" />
}

/** Full-width image band with overlay text. Divi: Section with bg image + overlay + Text. */
export function ImageBand({ image, eyebrow, title, text, children }: { image: string; eyebrow: string; title: string; text: string; children?: ReactNode }) {
  return (
    <Section tone="image" bgImage={image} className="bf-band" padding="lg">
      <Row>
        <Column>
          <div className="bf-band__copy" data-reveal>
            <p className="et_pb_eyebrow et_pb_eyebrow--light">{eyebrow}</p>
            <h2>{title}</h2>
            <p className="bf-hero__sub">{text}</p>
            {children}
          </div>
        </Column>
      </Row>
    </Section>
  )
}
