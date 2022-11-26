import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { S_BorderBottomAnimation } from '@styles'

export const C_Guidance = () => {
  return (
    <S_Wrapper>
      <h3> Welcome back cinemasters! </h3>
      <h4>Please fill in the form.</h4>
      <article>
        Don{`'`}t have account?{' '}
        <strong>
          <Link to="/register">Register</Link>
        </strong>
        {` `}now.
      </article>
    </S_Wrapper>
  )
}

const S_Wrapper = styled.article`
  display: flex;
  flex-flow: column nowrap;
  gap: var(--spaceY-md);

  text-align: center;

  a {
    ${S_BorderBottomAnimation}
  }
`
