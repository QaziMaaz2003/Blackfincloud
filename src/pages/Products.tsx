import { contact, productsCta, productsPage, productValues, products } from '../content/site'
import { usePageMeta } from '../lib/usePageMeta'
import { CardGrid } from '../sections/Blocks'
import { DeploymentBand, ProductOverview, ProductSection } from '../sections/ProductBlocks'
import { CtaBanner, PageHero } from '../sections/Shared'

export function Products() {
  usePageMeta('Products', 'Blackfin Cloud for Government: Geospatial Management, Project & Task Automation, and Procurement & Vendor Management for state and local agencies, deployed in weeks.')
  return (
    <>
      <PageHero
        {...productsPage}
        actions={[
          { label: 'Schedule a Call', href: contact.calendly },
          { label: 'See the products', href: '#geospatial-management', variant: 'ghost' },
        ]}
      />
      <DeploymentBand />
      <ProductOverview items={products} />
      {products.map((p, i) => (
        <ProductSection key={p.slug} product={p} tone={i % 2 === 0 ? 'alt' : 'light'} reverse={i % 2 === 1} />
      ))}
      <CardGrid {...productValues} cols={3} tone="light" />
      <CtaBanner content={productsCta} />
    </>
  )
}
