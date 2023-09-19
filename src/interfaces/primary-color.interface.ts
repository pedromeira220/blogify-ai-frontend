export const primaryColorArray = [
  'PURPLE',
  'ORANGE',
  'BLUE',
  'GREEN',
  'YELLOW',
] as const

export type PrimaryColorType = (typeof primaryColorArray)[number]
