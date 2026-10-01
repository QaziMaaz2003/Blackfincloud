import { Column, Row, Section } from '../components/divi'
import { Blurb, Button, Heading, Image, Testimonial, Text, Toggle } from '../components/modules'
import { Icon } from '../components/modules/Icon'
import {
  about,
  advantage,
  experience,
  faq,
  industries,
  process,
  roi,
  solutions,
  testimonial,
  work,
} from '../content/site'
import { RoiCalculator } from './RoiCalculator'

/** Centered "learn more" button under a teaser section (Divi: Button module, centered) */
function MoreLink({ to, children }: { to: string; children: string }) {
  return (
    <Row>
      <Column>
        <div className="bf-center">
          <Button href={to} variant="outline">
            {children}
          </Button>
        </div>
      </Column>
    </Row>
  )
}

/* ================= HOME TEASERS ================= */

export function SolutionsTeaser() {
  return (
    <Section id="solutions" tone="light">
      <Row>
        <Column>
          <Heading eyebrow={solutions.eyebrow} title={solutions.title} text={solutions.intro} />
        </Column>
      </Row>
      <Row layout="1_4,1_4,1_4,1_4" className="bf-cards">
        {solutions.products.map((p) => (
          <Column key={p.name}>
            <Blurb icon={p.icon} title={p.name} tag={p.tag} text={p.text} />
          </Column>
        ))}
      </Row>
      <MoreLink to="/power-platform">Explore Power Platform</MoreLink>
    </Section>
  )
}

export function ProcessTeaser() {
  return (
    <Section id="process" tone="dark">
      <Row>
        <Column>
          <Heading eyebrow={process.eyebrow} title={process.title} text={process.intro} invert />
        </Column>
      </Row>
      <Row layout="1_3,1_3,1_3" className="bf-steps">
        {process.steps.map((s) => (
          <Column key={s.n}>
            <Blurb number={s.n} title={s.title} text={s.text} />
          </Column>
        ))}
      </Row>
      <Row>
        <Column>
          <div className="bf-center">
            <Button href="/process" variant="ghost">
              See how we work
            </Button>
          </div>
        </Column>
      </Row>
    </Section>
  )
}

export function IndustriesTeaser() {
  return (
    <Section id="industries" tone="light">
      <Row>
        <Column>
          <Heading eyebrow={industries.eyebrow} title={industries.title} />
        </Column>
      </Row>
      <Row layout="1_4,1_4,1_4,1_4" className="bf-cards">
        {industries.items.map((i) => (
          <Column key={i.title}>
            <Blurb image={i.image} title={i.title} text={i.text} />
          </Column>
        ))}
      </Row>
      <MoreLink to="/industries">Explore industries</MoreLink>
    </Section>
  )
}

export function WorkTeaser() {
  return (
    <Section id="work" tone="alt">
      <Row>
        <Column>
          <Heading eyebrow={work.eyebrow} title={work.title} />
        </Column>
      </Row>
      <WorkCards />
      <MoreLink to="/past-performance">View past performance</MoreLink>
    </Section>
  )
}

export function AboutTeaser() {
  return (
    <Section id="about" tone="light">
      <Row layout="1_2,1_2" align="center">
        <Column>
          <Image src={about.image} alt="Blackfin consultants working with a client team" className="et_pb_image--rounded" />
        </Column>
        <Column>
          <Heading eyebrow={about.eyebrow} title={about.title} align="left" />
          <Text className="et_pb_text_align_left">
            <p>{about.text[0]}</p>
            <Button href="/about">Meet Blackfin</Button>
          </Text>
        </Column>
      </Row>
    </Section>
  )
}

/* ================= SHARED BLOCKS (used on inner pages) ================= */

export function WorkCards() {
  return (
    <Row layout="1_3,1_3,1_3" className="bf-cards">
      {work.items.map((w) => (
        <Column key={w.client}>
          <Blurb image={w.image} meta={w.meta ? `${w.client} · ${w.meta}` : w.client} title={w.title} text={w.text} />
        </Column>
      ))}
    </Row>
  )
}

export function Advantage() {
  return (
    <Section tone="alt" id="advantage">
      <Row>
        <Column>
          <Heading eyebrow={advantage.eyebrow} title={advantage.title} />
        </Column>
      </Row>
      <Row>
        <Column>
          <div className="bf-compare" role="table" aria-label="Traditional delivery compared with The Blackfin Way" data-reveal>
            <div className="bf-compare__head" role="row">
              {advantage.columns.map((c, i) => (
                <div key={i} role="columnheader" className={i === 2 ? 'is-brand' : ''}>
                  {c}
                </div>
              ))}
            </div>
            {advantage.rows.map(([k, a, b]) => (
              <div className="bf-compare__row" role="row" key={k}>
                <div role="rowheader" className="bf-compare__key">
                  {k}
                </div>
                <div role="cell" className="bf-compare__old">
                  <Icon name="x" size={16} />
                  <span>{a}</span>
                </div>
                <div role="cell" className="bf-compare__new">
                  <Icon name="check" size={16} />
                  <span>{b}</span>
                </div>
              </div>
            ))}
          </div>
        </Column>
      </Row>
    </Section>
  )
}

export function Roi({ tone = 'light' }: { tone?: 'light' | 'alt' }) {
  return (
    <Section id="roi" tone={tone}>
      <Row layout="1_2,1_2" align="center">
        <Column>
          <Heading eyebrow={roi.eyebrow} title={roi.title} text={roi.intro} align="left" />
        </Column>
        <Column>
          <RoiCalculator />
        </Column>
      </Row>
    </Section>
  )
}

export function Experience({ tone = 'alt' }: { tone?: 'light' | 'alt' }) {
  return (
    <Section tone={tone} id="experience">
      <Row>
        <Column>
          <Heading eyebrow={experience.eyebrow} title={experience.title} text={experience.text} />
        </Column>
      </Row>
      <Row layout="1_4,1_4,1_4,1_4" className="bf-cards">
        {experience.areas.map((a) => (
          <Column key={a.title}>
            <Blurb icon={a.icon} title={a.title} text={a.text} />
          </Column>
        ))}
      </Row>
    </Section>
  )
}

export function Deployment() {
  return (
    <Section tone="dark" id="deployment">
      <Row layout="1_2,1_2" align="center">
        <Column>
          <Heading eyebrow={testimonial.eyebrow} title={testimonial.title} align="left" invert />
          <Testimonial quote={testimonial.quote} author={testimonial.author} meta={testimonial.meta} />
        </Column>
        <Column>
          <Image src={testimonial.image} alt="Public-sector operations center using digital systems" className="et_pb_image--rounded" />
        </Column>
      </Row>
    </Section>
  )
}

export function Faq({
  items = faq.items,
  eyebrow = faq.eyebrow,
  title = faq.title,
  tone = 'alt',
}: {
  items?: { q: string; a: string }[]
  eyebrow?: string
  title?: string
  tone?: 'light' | 'alt'
}) {
  return (
    <Section id="faq" tone={tone} padding="md">
      <Row>
        <Column>
          <Heading eyebrow={eyebrow} title={title} />
        </Column>
      </Row>
      <Row className="bf-faq">
        <Column>
          {items.map((f, i) => (
            <Toggle key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </Column>
      </Row>
    </Section>
  )
}
