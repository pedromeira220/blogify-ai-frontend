import { returnTailwindPrimaryColor } from '@/utils/return-tailwind-primary-color'
import React, { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const text = tv({
  base: 'font-semibold text-base',
  variants: {
    color: {
      PURPLE: returnTailwindPrimaryColor('PURPLE'),
      ORANGE: returnTailwindPrimaryColor('ORANGE'),
      BLUE: returnTailwindPrimaryColor('BLUE'),
      GREEN: returnTailwindPrimaryColor('GREEN'),
      YELLOW: returnTailwindPrimaryColor('YELLOW'),
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
