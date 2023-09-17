import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type LabelProps = ComponentProps<'label'>

export const Label: React.FC<LabelProps> = ({ className, ...rest }) => {
  return (
    <>
      <label className={twMerge('text-gray-700', className)} {...rest} />
    </>
  )
}
