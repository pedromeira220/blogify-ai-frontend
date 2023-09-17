import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ParagraphProps = ComponentProps<'p'>

export const Paragraph: React.FC<ParagraphProps> = ({ className, ...rest }) => {
  return <p className={twMerge('text-gray-600 text-lg', className)} {...rest} />
}
