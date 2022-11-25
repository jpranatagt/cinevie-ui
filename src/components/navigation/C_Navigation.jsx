import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { C_NavigationMenu } from './components'

export const C_Navigation = () => {
  return (
    <S_Wrapper>
      <p>
        <Link to="/">
          Cine<strong>Vie</strong>
        </Link>
      </p>
      <C_NavigationMenu />
    </S_Wrapper>
  )
}

const S_Wrapper = styled.header`
  position: absolute;
  top: var(--float-button-y);
  right: var(--float-button-x);
  left: var(--float-button-x);

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`
