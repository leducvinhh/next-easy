import React from 'react'
import { LayoutProps } from '@/models/index'
import Link from 'next/link'

export function AdminLayout(props: LayoutProps) {
  return (
    <div>
      <h1>Admin layout</h1>
      <div>Sidebar</div>

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
