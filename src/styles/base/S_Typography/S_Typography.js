import { css } from 'styled-components'

import { S_Screen } from '../../mixin'
import { S_Types } from './S_Types'

export const S_Typography = css`
  h1 {
    ${S_Types.TitleMD}

    ${S_Screen.md`
      ${S_Types.TitleLG}
    `}

    ${S_Screen.lg`
      ${S_Types.TitleXL}
    `}
  }

  h2 {
    ${S_Types.TitleSM}

    ${S_Screen.md`
      ${S_Types.TitleMD}
    `}

    ${S_Screen.lg`
      ${S_Types.TitleLG}
    `}

    ${S_Screen.xxl`
      ${S_Types.TitleXL}
    `}
  }

  h3 {
    ${S_Types.TitleXS}

    ${S_Screen.md`
      ${S_Types.TitleSM}
    `}

    ${S_Screen.xl`
      ${S_Types.TitleMD}
    `}

    ${S_Screen.xxxl`
      ${S_Types.TitleLG}
    `}
  }

  h4 {
    ${S_Types.Body}

    ${S_Screen.md`
      ${S_Types.TitleXS}
    `}

    ${S_Screen.lg`
      ${S_Types.BodyTitleSM}
    `}

    ${S_Screen.xxxl`
      ${S_Types.TitleMD}
    `}
  }

  h5 {
    ${S_Types.BodySM}

    ${S_Screen.md`
      ${S_Types.Body}
    `}

    ${S_Screen.xxl`
      ${S_Types.TitleSM}
    `}
  }

  p {
    ${S_Types.Body}

    ${S_Screen.xxxl`
      ${S_Types.TitleMD}
    `}
  }

  h6 {
    ${S_Types.BodySM}

    ${S_Screen.xxxl`
      ${S_Types.TitleSM}
    `}
  }
`
