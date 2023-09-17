import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type HintProps = ComponentProps<'p'>

export const Hint: React.FC<HintProps> = ({ className, ...rest }) => {
  return (
    <>
      <p className={twMerge('text-gray-500 mt-2', className)} {...rest} />
    </>
  )
}
