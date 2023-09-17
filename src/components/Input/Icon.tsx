import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Icon(props: IconProps) {
  return <div {...props} className={twMerge('', props.className)} />
}
