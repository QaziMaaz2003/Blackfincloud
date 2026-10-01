import { capabilities, faq, integrations, pages, solutions, solutionTags } from '../content/site'
import { usePageMeta } from '../lib/usePageMeta'
import { CardGrid, Ecosystem } from '../sections/Blocks'
import { Advantage, Faq, Roi } from '../sections/Content'
import { CtaBanner, PageHero, Split } from '../sections/Shared'

export function PowerPlatform() {
  usePageMeta('Power Platform', 'Microsoft Power Platform and Dynamics 365—Power Apps, Power Automate and Power BI—designed as one connected layer for your operations.')
  return (
    <>
      <PageHero {...pages.powerPlatform} />
      <Ecosystem tone="light" />
      {solutions.products.map((p, i) => (
        <Split
          key={p.name}
          id={p.name.toLowerCase().replace(/\s+/g, '-')}
          eyebrow={p.tag}
          title={p.name}
          text={p.text}
          points={p.points}
          tags={solutionTags[p.name]}
          image={p.image}
          imageAlt={`${p.name} solution`}
          reverse={i % 2 === 1}
          tone={i % 2 === 0 ? 'alt' : 'light'}
          cta={{ label: `Discuss ${p.name}`, href: '/contact' }}
        />
      ))}
      <Advantage />
      <CardGrid {...capabilities} cols={4} tone="light" />
      <Split
        eyebrow={integrations.eyebrow}
        title={integrations.title}
        text={integrations.text}
        tags={integrations.items}
        image={integrations.image}
        imageAlt="Modern open-plan office where teams use connected Microsoft tools"
        tone="alt"
        reverse
        cta={{ label: 'Plan your integration', href: '/contact' }}
      />
      <Roi tone="light" />
      <Faq items={faq.items.slice(0, 4)} tone="alt" />
      <CtaBanner />
    </>
  )
}
