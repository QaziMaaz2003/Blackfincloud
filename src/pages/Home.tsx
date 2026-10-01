import { faq, homeStats, products, useCases, why } from '../content/site'
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
import { ProductOverview } from '../sections/ProductBlocks'
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
      <Ecosystem tone="alt" more={{ label: 'Explore Power Platform', href: '/power-platform' }} />
      <StatsBand stats={homeStats} />
      <Advantage />
      <ProductOverview
        items={products}
        eyebrow="Blackfin Cloud for Government"
        title="Tools you can use. Deployed now."
        text="Three flexible solutions for state and local government, deployed in weeks, not months, and priced for any agency."
        tone="light"
        linkTo="/products"
        more={{ label: 'Explore all products', href: '/products' }}
      />
      <CardGrid {...useCases} cols={3} tone="alt" />
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
