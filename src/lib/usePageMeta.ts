import { useEffect } from 'react'

/** Per-page <title> and meta description (Divi: set in Yoast/RankMath on each page). */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} | Blackfin Cloud Services`
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])
}
