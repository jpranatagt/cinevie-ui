import { css } from 'styled-components'

import { S_Theme } from './S_Theme'
import { S_SpaceX, S_SpaceY } from './S_Spaces'
import { S_FloatButton } from './S_FloatButton'

export const S_Root = css`
  :root {
    ${S_Theme}
    ${S_SpaceX}
    ${S_SpaceY}
    ${S_FloatButton}
  }
`
