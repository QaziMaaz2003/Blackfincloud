import { Column, Row, Section } from '../components/divi'
import { Heading } from '../components/modules'
import { hero, pages, resultStats, whyChoose, work } from '../content/site'
import { usePageMeta } from '../lib/usePageMeta'
import { AlsoDelivered, CardGrid, CaseStudy, TagCloud } from '../sections/Blocks'
import { Deployment } from '../sections/Content'
import { CtaBanner, PageHero, StatsBand } from '../sections/Shared'

const POINTS: Record<string, string[]> = {
  'Los Angeles County': ['Procurement system built on Microsoft Dynamics 365', 'Requirement to deployment in a matter of months'],
  'NY Power Authority': ['Customer operations in a complex public-authority environment', 'Microsoft platform expertise applied end to end'],
  LAUSD: ['Activity tracking for special student populations', 'Supported on Dynamics CRM over several years'],
}

export function PastPerformance() {
  usePageMeta('Past Performance', 'Selected Microsoft Dynamics 365 engagements for Los Angeles County, NY Power Authority, LAUSD and more.')
  const [la, ny, lausd] = work.items
  const study = (w: (typeof work.items)[number], i: number) => (
    <CaseStudy
      key={w.client}
      client={w.client}
      meta={w.meta}
      title={w.title}
      text={w.text}
      image={w.image}
      points={POINTS[w.client]}
      reverse={i % 2 === 1}
      tone={i % 2 === 0 ? 'light' : 'alt'}
    />
  )
  return (
    <>
      <PageHero {...pages.work} />
      <StatsBand stats={resultStats} />
      {study(la, 0)}
      {study(ny, 1)}
      <Deployment />
      {study(lausd, 0)}
      <AlsoDelivered />
      <CardGrid {...whyChoose} cols={3} tone="alt" />
      <Section tone="light" padding="md">
        <Row>
          <Column>
            <Heading title="Trusted by public-sector leaders" text="Government and commercial clients we have delivered for since 2010." />
            <TagCloud items={hero.clients} />
          </Column>
        </Row>
      </Section>
      <CtaBanner />
    </>
  )
}
