import { faq, homeStats, useCases, why } from '../content/site'
import { usePageMeta } from '../lib/usePageMeta'
import { CardGrid, Ecosystem, Gallery } from '../sections/Blocks'
import {
  AboutTeaser,
  Advantage,
  Deployment,
  Faq,
  IndustriesTeaser,
  ProcessTeaser,
  Roi,
  WorkTeaser,
} from '../sections/Content'
import { Hero } from '../sections/Hero'
import { CtaBanner, StatsBand } from '../sections/Shared'

export function Home() {
  usePageMeta(
    'Microsoft Dynamics 365 & Power Platform',
    'Enterprise-grade low-code Microsoft Dynamics 365 and Power Platform solutions for government and commercial organizations, delivered in weeks instead of years.',
  )
  return (
    <>
      <Hero />
      <CardGrid {...why} cols={3} tone="light" />
      <Ecosystem tone="alt" more={{ label: 'Explore all solutions', href: '/solutions' }} />
      <StatsBand stats={homeStats} />
      <Advantage />
      <CardGrid {...useCases} cols={3} tone="light" />
      <ProcessTeaser />
      <IndustriesTeaser />
      <WorkTeaser />
      <Gallery tone="light" />
      <Deployment />
      <Roi tone="alt" />
      <AboutTeaser />
      <Faq items={faq.items.slice(0, 3)} tone="alt" />
      <CtaBanner />
    </>
  )
}
