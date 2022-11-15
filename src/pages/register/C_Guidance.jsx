import React from 'react'
import styled from 'styled-components'

export const C_Guidance = () => {
  return (
    <S_Wrapper>
      <h3> Welcome back cinemasters! </h3>
      <h4>Please fill in the form.</h4>
    </S_Wrapper>
  )
}

const S_Wrapper = styled.article`
  display: flex;
  flex-flow: column nowrap;
  gap: var(--spaceY-md);

  text-align: center;
`
