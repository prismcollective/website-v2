'use client'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const body = document.body
    body.classList.add('page-transition')
    
    return () => {
      body.classList.remove('page-transition')
    }
  }, [pathname, searchParams])

  return null
}