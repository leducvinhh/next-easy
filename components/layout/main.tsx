import React, { useEffect } from 'react'
import { LayoutProps } from '@/models/index'
import Link from 'next/link'

export function MainLayout(props: LayoutProps) {
  useEffect(() => {
    console.log('Main layout mounted')

    return () => {
      console.log('Main layout unmounted')
    }
  }, [])

  return (
    <div>
      <h1>Main layout</h1>

      <Link
        href='/'
        legacyBehavior
      >
        <a>Home</a>
      </Link>
      <Link
        href='/about'
        legacyBehavior
      >
        <a>About</a>
      </Link>

      <div>{props.children}</div>
    </div>
  )
}
