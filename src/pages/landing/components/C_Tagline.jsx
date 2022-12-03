import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { S_Screen, S_BorderBottomAnimation } from '@styles'

export const C_Tagline = () => {
  return (
    <S_Wrapper>
      <h2>
        <strong>Welcome!</strong>
      </h2>
      <h3>Millions of movies to discover.</h3>
      <h3>
        <Link to="/login">
          <strong>Login </strong>
        </Link>{' '}
        and explore now.
      </h3>
    </S_Wrapper>
  )
}

const S_Wrapper = styled.article`
  margin-top: var(--spaceY-xxl);

  h2 {
    margin-bottom: var(--spaceY-md);
  }

  h3 {
    margin-bottom: 0;
  }

  a {
    ${S_BorderBottomAnimation}
  }

  ${S_Screen.md`
    h3 {
      margin-bottom: var(--spaceY-xs);
    }
  `}
`
