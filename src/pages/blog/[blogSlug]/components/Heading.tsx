import React, { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const heading = tv({
  base: 'text-gray-900 font-semibold',
  variants: {
    size: {
      h1: 'text-4xl',
      h2: 'text-3xl',
      h3: 'text-2xl ',
      h4: 'text-xl',
    },
  },
  defaultVariants: {
    size: 'h2',
  },
})

type HeadingProps = ComponentProps<'h3'> & VariantProps<typeof heading>

export const Heading: React.FC<HeadingProps> = ({
  className,
  size,
  ...rest
}) => {
  return <h3 className={heading({ className, size })} {...rest} />
}
