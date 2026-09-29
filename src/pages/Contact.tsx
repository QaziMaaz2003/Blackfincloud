import { contactCards, contactSteps, pages, prepare, whoWeServe } from '../content/site'
import { usePageMeta } from '../lib/usePageMeta'
import { CardGrid, ContactCards, NumberedSteps } from '../sections/Blocks'
import { Contact as ContactSection } from '../sections/Contact'
import { Faq } from '../sections/Content'
import { PageHero, Split } from '../sections/Shared'

export function Contact() {
  usePageMeta('Contact', 'Book a free discovery call with Blackfin Cloud Services. Government and commercial inquiries welcome.')
  return (
    <>
      <PageHero {...pages.contact} />
      <ContactCards items={contactCards} />
      <ContactSection />
      <CardGrid {...whoWeServe} cols={4} tone="alt" />
      <Split
        eyebrow={prepare.eyebrow}
        title={prepare.title}
        text={prepare.text}
        points={prepare.items}
        image={prepare.image}
        imageAlt="Notebook and pen ready for a discovery conversation"
        tone="light"
      />
      <NumberedSteps {...contactSteps} tone="dark" />
      <Faq tone="alt" />
    </>
  )
}
