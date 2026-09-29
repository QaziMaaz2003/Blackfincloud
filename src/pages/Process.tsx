import { Column, Row, Section } from '../components/divi'
import { Blurb, Heading } from '../components/modules'
import { faq, pages, principles, process, processExtras, stepDetail } from '../content/site'
import { usePageMeta } from '../lib/usePageMeta'
import { CardGrid, Stepper, StepBlock, WeekBars } from '../sections/Blocks'
import { Faq } from '../sections/Content'
import { CtaBanner, PageHero } from '../sections/Shared'

export function Process() {
  usePageMeta('Process', 'Our three-step delivery process: analyze together, iterate on design, and deploy continuously. No black box.')
  return (
    <>
      <PageHero {...pages.process} />
      <Stepper steps={process.steps.map((s) => ({ n: s.n, title: s.title, badge: stepDetail[s.title].badge }))} />
      {process.steps.map((s, i) => (
        <StepBlock
          key={s.n}
          n={s.n}
          title={s.title}
          text={s.text}
          points={s.points}
          image={s.image}
          badge={stepDetail[s.title].badge}
          bring={stepDetail[s.title].bring}
          deliver={stepDetail[s.title].deliver}
          reverse={i % 2 === 1}
          tone={i % 2 === 0 ? 'alt' : 'light'}
        />
      ))}
      <WeekBars tone="light" />
      <Section tone="dark">
        <Row>
          <Column>
            <Heading eyebrow={processExtras.eyebrow} title={processExtras.title} invert />
          </Column>
        </Row>
        <Row layout="1_3,1_3,1_3" className="bf-steps">
          {processExtras.items.map((it) => (
            <Column key={it.title}>
              <Blurb icon={it.icon} title={it.title} text={it.text} />
            </Column>
          ))}
        </Row>
      </Section>
      <CardGrid {...principles} cols={4} tone="light" />
      <Faq items={[faq.items[0], faq.items[3], faq.items[4]]} tone="alt" />
      <CtaBanner />
    </>
  )
}
