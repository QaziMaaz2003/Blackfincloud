import type { CSSProperties, ReactNode } from 'react'

/**
 * Divi structure wrappers: Section > Row > Column > Module.
 * Class names mirror Divi (et_pb_section / et_pb_row / et_pb_column) so each
 * React block maps 1:1 onto a Divi builder element.
 */

type Tone = 'light' | 'alt' | 'dark' | 'image'

interface SectionProps {
  id?: string
  tone?: Tone
  /** Divi "Background Image" — used with tone="image" */
  bgImage?: string
  /** Divi Spacing > Padding preset */
  padding?: 'sm' | 'md' | 'lg'
  className?: string
  children: ReactNode
}

export function Section({ id, tone = 'light', bgImage, padding = 'lg', className = '', children }: SectionProps) {
  const style: CSSProperties | undefined = bgImage ? { backgroundImage: `url(${bgImage})` } : undefined
  return (
    <section
      id={id}
      className={`et_pb_section et_pb_section--${tone} et_pb_padding--${padding} ${className}`}
      style={style}
    >
      {children}
    </section>
  )
}

interface RowProps {
  /** Divi column structure, e.g. "4_4", "1_2,1_2", "1_3,1_3,1_3", "2_3,1_3" */
  layout?: string
  /** Vertical alignment of columns */
  align?: 'start' | 'center'
  className?: string
  children: ReactNode
}

const FR: Record<string, number> = { '4_4': 1, '1_2': 1, '1_3': 1, '2_3': 2, '1_4': 1, '3_4': 3, '1_5': 1 }

export function Row({ layout = '4_4', align = 'start', className = '', children }: RowProps) {
  const cols = layout
    .split(',')
    .map((c) => `${FR[c.trim()] ?? 1}fr`)
    .join(' ')
  return (
    <div
      className={`et_pb_row et_pb_row--${align} ${className}`}
      style={{ '--cols': cols } as CSSProperties}
      data-layout={layout}
    >
      {children}
    </div>
  )
}

export function Column({ className = '', children }: { className?: string; children: ReactNode }) {
  return <div className={`et_pb_column ${className}`}>{children}</div>
}
