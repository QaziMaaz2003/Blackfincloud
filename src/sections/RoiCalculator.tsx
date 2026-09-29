import { useState } from 'react'
import { roi } from '../content/site'

/** Divi: paste as a Code module (HTML + small inline script). See docs/DIVI-MAPPING.md. */
export function RoiCalculator() {
  const [size, setSize] = useState(roi.defaultSize)
  const [bottleneck, setBottleneck] = useState(roi.defaultBottleneck)

  const hours = roi.sizes[size].staff * roi.bottlenecks[bottleneck].hours
  const value = hours * roi.hourlyValue
  const fmt = (n: number) => n.toLocaleString('en-US')

  return (
    <div className="bf-roi et_pb_code" data-reveal>
      <div className="bf-roi__fields">
        <label>
          <span>Organization size</span>
          <select value={size} onChange={(e) => setSize(Number(e.target.value))}>
            {roi.sizes.map((s, i) => (
              <option key={s.label} value={i}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Primary bottleneck</span>
          <select value={bottleneck} onChange={(e) => setBottleneck(Number(e.target.value))}>
            {roi.bottlenecks.map((b, i) => (
              <option key={b.label} value={i}>
                {b.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="bf-roi__out" aria-live="polite">
        <div>
          <strong>{fmt(hours)}</strong>
          <span>hours of annual capacity</span>
        </div>
        <div>
          <strong>${fmt(value)}</strong>
          <span>estimated capacity value</span>
        </div>
      </div>
      <p className="bf-roi__note">{roi.disclaimer}</p>
    </div>
  )
}
