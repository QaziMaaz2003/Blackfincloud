import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { About } from './pages/About'
import { CmasContract } from './pages/CmasContract'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Industries } from './pages/Industries'
import { PastPerformance } from './pages/PastPerformance'
import { Process } from './pages/Process'
import { Solutions } from './pages/Solutions'
import { Footer, Header } from './sections/Chrome'

/** Scroll to #hash on route change, fade-in [data-reveal] elements as they enter view. */
function Behaviors() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // wait a tick so the target route has rendered
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 30)
      return () => clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)')
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <Behaviors />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/past-performance" element={<PastPerformance />} />
          <Route path="/process" element={<Process />} />
          <Route path="/cmas-contract" element={<CmasContract />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
