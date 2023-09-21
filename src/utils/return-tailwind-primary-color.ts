import { PrimaryColorType } from '@/interfaces/primary-color.interface'

const colorsNormalize = {
  PURPLE: 'text-primary-700',
  BLUE: 'text-blue-700',
  GREEN: 'text-green-700',
  ORANGE: 'text-[#FF4405]',
  YELLOW: 'text-yellow-600',
} as const

export const returnTailwindPrimaryColor = (
  color: PrimaryColorType | undefined,
) => {
  if (color === undefined) {
    return ''
  }

  const colorToReturn = colorsNormalize[color]

  return colorToReturn
}
