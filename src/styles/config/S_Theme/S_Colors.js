import { U_ColorGenerator } from './utils'

const primary = U_ColorGenerator('primary', '209, 96%')
const secondary = U_ColorGenerator('secondary', '351, 27%')

export const S_Colors = {
  ...primary,
  ...secondary,
}
