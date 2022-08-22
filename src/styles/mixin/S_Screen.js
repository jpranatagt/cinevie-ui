import { css } from 'styled-components'

import { S_Breakpoints } from '../config'

export const S_Screen = Object.keys(S_Breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${S_Breakpoints[label]}) {
        ${css(...args)}
      }
    `
    return accumulator
  },
  {}
)
