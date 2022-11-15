import React from 'react'
import styled from 'styled-components'

import { S_Layout, S_Screen } from '@styles'

import { C_Tagline, C_MoviesCover } from './components'

const P_Landing = () => {
  return (
    <S_Wrapper>
      <C_Tagline />
      <C_MoviesCover />
    </S_Wrapper>
  )
}

export default P_Landing

const S_Wrapper = styled.section`
  ${S_Layout}

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  row-gap: var(--spaceY-xxl);

  ${S_Screen.lg`
    flex-flow: row nowrap;
  `}
`
