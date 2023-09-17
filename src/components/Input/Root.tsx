import { HTMLAttributes, ReactNode } from 'react'

export type RootProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function Root({ ...rest }: RootProps) {
  return <div {...rest} />
}
