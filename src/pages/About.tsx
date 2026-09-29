import { Column, Row, Section } from '../components/divi'
import { Heading, Text } from '../components/modules'
import { Icon } from '../components/modules/Icon'
import {
  about,
  aboutStats,
  credentials,
  engage,
  hero,
  industriesAlso,
  leadership,
  pages,
  values,
} from '../content/site'
import { usePageMeta } from '../lib/usePageMeta'
import { CardGrid, CredentialTiles, Gallery, MissionBand, TagCloud, Timeline } from '../sections/Blocks'
import { Experience } from '../sections/Content'
import { CtaBanner, PageHero, Split, StatsBand } from '../sections/Shared'

export function About() {
  usePageMeta('About', 'Blackfin Cloud Services has delivered Microsoft Dynamics 365 and Power Platform solutions for government and commercial clients since 2010.')
  return (
    <>
      <PageHero {...pages.about} />
      <Split
        eyebrow="Our story"
        title="Enterprise-grade tools, without the enterprise price tag."
        image="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=75"
        imageAlt="Blackfin consultants working through a solution with a client"
        paragraphs={about.text}
        badge={{ value: '160+', label: 'deployments delivered' }}
      />
      <StatsBand stats={aboutStats} />

      <Section tone="light">
        <Row layout="1_2,1_2">
          <Column>
            <Text className="et_pb_text_align_left bf-panel">
              <h3 className="bf-h4">Core competencies</h3>
              <ul className="bf-checks">
                {about.competencies.map((c) => (
                  <li key={c}>
                    <Icon name="check" size={18} />
                    {c}
                  </li>
                ))}
              </ul>
            </Text>
          </Column>
          <Column>
            <Text className="et_pb_text_align_left bf-panel">
              <h3 className="bf-h4">Key differentiators</h3>
              <ul className="bf-checks">
                {about.differentiators.map((c) => (
                  <li key={c}>
                    <Icon name="check" size={18} />
                    {c}
                  </li>
                ))}
              </ul>
            </Text>
          </Column>
        </Row>
      </Section>

      <MissionBand />
      <Timeline />
      <CardGrid {...values} cols={4} tone="light" />

      <Section tone="alt" padding="md">
        <Row layout="1_3,2_3" align="center" className="bf-leader">
          <Column>
            <div className="bf-avatar" aria-hidden="true">
              OS
            </div>
          </Column>
          <Column>
            <Heading eyebrow={leadership.eyebrow} title={leadership.name} text={leadership.text} align="left" />
            <p className="bf-leader__role">{leadership.role}, Blackfin Cloud Services</p>
          </Column>
        </Row>
      </Section>

      <Gallery tone="light" />
      <CardGrid {...engage} cols={3} tone="alt" />
      <Experience tone="light" />
      <CredentialTiles {...credentials} tone="alt" />

      <Section tone="light" padding="md">
        <Row>
          <Column>
            <Heading title="Industries we serve" text={about.industries} />
            <TagCloud items={['Government', 'Financial services', 'Non-profit', ...industriesAlso.items]} />
            <p className="bf-trusted">Clients include</p>
            <TagCloud items={hero.clients} />
          </Column>
        </Row>
      </Section>
      <CtaBanner />
    </>
  )
}
