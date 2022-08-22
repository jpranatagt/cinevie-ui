import { createGlobalStyle } from 'styled-components'

import { S_Root } from './S_Root'
import { S_Normalize } from './S_Normalize'
import { S_TypefaceRA } from './S_Typeface'
import { S_Typography } from './S_Typography'

export const S_Global = createGlobalStyle`
  ${S_Root}
  ${S_TypefaceRA}
  ${S_Normalize}
  ${S_Typography}
`
