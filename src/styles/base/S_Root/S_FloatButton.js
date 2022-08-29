import { css } from 'styled-components'

import { S_Screen } from '../../mixin'

export const S_FloatButton = css`
  --float-button-x: var(--spaceX-md);
  --float-button-y: var(--spaceX-lg);

  ${S_Screen.md`
    --float-button-x: var(--spaceX-xl);
    --float-button-y: var(--spaceX-xl);
  `}

  ${S_Screen.xl`
    --float-button-x: var(--spaceX-xxl);
  `}
`
