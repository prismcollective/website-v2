'use client'

import { Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react';


// Separate component for navigation events
function NavigationEventsContent() {
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

// Wrapper component with Suspense
export default function NavigationEvents() {
  return (
    <Suspense fallback={null}>
      <NavigationEventsContent />
    </Suspense>
  )
}