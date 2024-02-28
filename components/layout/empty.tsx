import React from 'react'
import { LayoutProps } from '@/models/index'
import Link from 'next/link'

type IMainLayoutProps = {}

export function EmptyLayout(props: LayoutProps) {
  return <>{props.children}</>
}
