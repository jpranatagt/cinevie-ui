import { css } from 'styled-components'

export const U_TypeGenerator = (T_SCALES) => {
  const types = {}

  T_SCALES.map((scale) => {
    let { type, size, height } = scale

    types[type] = css`
      font-size: ${size}px;
      line-height: ${height}px;
    `
  })

  return types
}
