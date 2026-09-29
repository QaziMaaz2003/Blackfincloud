import { Column, Row, Section } from '../components/divi'
import { Button, Counter } from '../components/modules'
import { Icon } from '../components/modules/Icon'
import { ecosystem, hero } from '../content/site'

export function Hero() {
  return (
    <Section tone="image" bgImage={hero.image} className="bf-hero" padding="lg">
      <Row layout="2_3,1_3" align="center" className="bf-hero__row">
        <Column>
          <div className="bf-hero__copy">
            <p className="et_pb_eyebrow et_pb_eyebrow--light">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p className="bf-hero__sub">{hero.subtitle}</p>
            <div className="et_pb_button_module">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="ghost">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>
        </Column>
        <Column className="bf-hero__aside">
          <div className="bf-glass">
            <h3>One connected Microsoft stack</h3>
            <p className="bf-glass__sub">Built around how your teams already work</p>
            <ul>
              {ecosystem.nodes.map((n) => (
                <li key={n.name}>
                  <span>
                    <Icon name={n.icon} size={18} />
                  </span>
                  {n.name}
                  <em>{n.role}</em>
                </li>
              ))}
            </ul>
            <p className="bf-glass__live">Working releases in weeks</p>
          </div>
        </Column>
      </Row>
      <Row layout="1_3,1_3,1_3" className="bf-hero__stats">
        {hero.stats.map((s) => (
          <Column key={s.label}>
            <Counter value={'value' in s ? s.value : undefined} suffix={'suffix' in s ? s.suffix : ''} text={'text' in s ? s.text : undefined} label={s.label} />
          </Column>
        ))}
      </Row>
      <Row layout="4_4" className="bf-hero__proof">
        <Column>
          <ul className="bf-chips" aria-label="Government credentials">
            {hero.credentials.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p className="bf-clients">
            <span>Trusted by</span>
            {hero.clients.map((c) => (
              <strong key={c}>{c}</strong>
            ))}
          </p>
        </Column>
      </Row>
    </Section>
  )
}
