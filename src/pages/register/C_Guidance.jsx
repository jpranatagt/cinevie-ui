import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { S_BorderBottomAnimation } from '@styles'

export const C_Guidance = () => {
  return (
    <S_Wrapper>
      <h3>No more wait!</h3>
      <h4>Fill in the form and start the explorations.</h4>
      <article>
        I already have account?{' '}
        <strong>
          <Link to="/login">Login</Link>
        </strong>
        {` `}here.
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
