import { Column, Row, Section } from '../components/divi'
import { Heading } from '../components/modules'
import { compliance, industries, industriesAlso, pages } from '../content/site'
import { usePageMeta } from '../lib/usePageMeta'
import { CardGrid, ImageBand, IndustryBlock, TagCloud } from '../sections/Blocks'
import { CtaBanner, PageHero } from '../sections/Shared'

const slug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

export function Industries() {
  usePageMeta('Industries', 'Microsoft Dynamics 365 and Power Platform solutions for government, financial services, non-profits and commercial enterprise.')
  return (
    <>
      <PageHero {...pages.industries} />

      <Section tone="light" padding="sm" className="bf-jump">
        <Row>
          <Column>
            <nav aria-label="Jump to an industry">
              <ul className="bf-tags bf-tags--center bf-tags--links">
                {industries.items.map((it) => (
                  <li key={it.title}>
                    <a href={`#${slug(it.title)}`}>{it.title}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </Column>
        </Row>
      </Section>

      {industries.items.map((it, i) => (
        <IndustryBlock
          key={it.title}
          id={slug(it.title)}
          title={it.title}
          text={it.text}
          image={it.image}
          reverse={i % 2 === 1}
          tone={i % 2 === 0 ? 'alt' : 'light'}
        />
      ))}

      <ImageBand image={compliance.image} eyebrow={compliance.eyebrow} title={compliance.title} text={compliance.text} />
      <CardGrid items={compliance.items} title="What that means in practice" cols={4} tone="light" />

      <Section tone="alt" padding="md">
        <Row>
          <Column>
            <Heading title={industriesAlso.title} text="Our Microsoft platform experience carries across sectors." />
            <TagCloud items={industriesAlso.items} />
          </Column>
        </Row>
      </Section>
      <CtaBanner />
    </>
  )
}
