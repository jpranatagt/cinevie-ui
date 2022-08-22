import { css } from 'styled-components'

import { S_Screen } from '@styles'

export const S_Layout = css`
  padding: var(--spaceY-sl) var(--spaceX-md);

  ${S_Screen.md`
    padding: var(--spaceY-ssl) var(--spaceX-xxl);
  `}

  ${S_Screen.xl`
    padding: var(--spaceY-ssl) var(--spaceX-sl);
  `}
`
