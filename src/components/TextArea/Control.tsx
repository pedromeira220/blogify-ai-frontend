import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type ControlProps = ComponentProps<'textarea'>

export function Control({ className, ...rest }: ControlProps) {
  return (
    <textarea
      {...rest}
      className={twMerge(
        'flex-1 border-0 bg-transparent p-0 text-gray-900 placeholder-gray-500 outline-none focus:ring-0',
        className,
      )}
    />
  )
}
