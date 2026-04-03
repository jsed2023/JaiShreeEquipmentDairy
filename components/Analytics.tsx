"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { initGA, pageview } from "@/lib/gtag"

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    initGA()
  }, [])

  useEffect(() => {
    if (!pathname) return

    const url =
      pathname + (searchParams?.toString() ? `?${searchParams}` : "")

    pageview(url)
  }, [pathname, searchParams])

  return null
}