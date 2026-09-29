import { Column, Row, Section } from '../components/divi'
import { Button, Heading } from '../components/modules'
import { cmas, cmasBenefits, cmasExplainer, cmasFaq, cmasSteps, credentials, naicsDetail } from '../content/site'
import { usePageMeta } from '../lib/usePageMeta'
import { CardGrid, CredentialTiles, NumberedSteps } from '../sections/Blocks'
import { Faq } from '../sections/Content'
import { CtaBanner, PageHero, Split } from '../sections/Shared'

export function CmasContract() {
  usePageMeta('CMAS Contract', 'Blackfin Cloud Services holds a California Multiple Award Schedule (CMAS) contract for Microsoft Dynamics 365 and Power Platform services.')
  return (
    <>
      <PageHero eyebrow={cmas.eyebrow} title={cmas.title} text={cmas.text} image={cmas.image} />
      <Split
        eyebrow={cmasExplainer.eyebrow}
        title={cmasExplainer.title}
        text={cmasExplainer.text}
        points={cmasExplainer.points}
        image={cmasExplainer.image}
        imageAlt="Glass government and office buildings"
        tone="light"
        badge={{ value: '3-24-05-2024', label: 'CMAS contract' }}
      />
      <CredentialTiles {...credentials} tone="alt" />

      <Section tone="light">
        <Row>
          <Column>
            <Heading eyebrow="Classification" title="Registered NAICS codes" />
          </Column>
        </Row>
        <Row className="bf-cmas">
          <Column>
            <dl className="bf-cmas__list" data-reveal>
              {naicsDetail.map((n) => (
                <div key={n.code}>
                  <dt>NAICS {n.code}</dt>
                  <dd>{n.label}</dd>
                </div>
              ))}
            </dl>
            <div className="bf-center">
              <Button href="/contact">Request a quote under CMAS</Button>
            </div>
          </Column>
        </Row>
      </Section>

      <CardGrid {...cmasBenefits} cols={3} tone="alt" />
      <NumberedSteps {...cmasSteps} tone="dark" />
      <Faq {...cmasFaq} tone="light" />
      <CtaBanner />
    </>
  )
}
