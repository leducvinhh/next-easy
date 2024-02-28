import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

export interface LayoutProps {
  children: ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPage & {
    Layout?: (props: LayoutProps) => ReactElement
  }
}
