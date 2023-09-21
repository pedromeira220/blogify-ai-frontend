import React, { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const text = tv({
  base: 'font-semibold text-base',
  variants: {
    color: {
      PURPLE: 'text-primary-700',
      ORANGE: 'text-[#FF4405]',
      BLUE: 'text-blue-700',
      GREEN: 'text-green-700',
      YELLOW: 'text-yellow-600',
      BLACK: '',
    },
  },
  defaultVariants: {
    color: 'BLACK',
  },
})

type TextProps = ComponentProps<'span'> & VariantProps<typeof text>

export const Text: React.FC<TextProps> = ({ className, color, ...rest }) => {
  return <span className={text({ className, color })} {...rest} />
}
