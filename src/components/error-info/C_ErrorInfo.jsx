import React from 'react'
import styled from 'styled-components'

import { S_BorderBottomAnimation, S_Screen } from '@styles'
import { C_Head } from '@components'

export const C_ErrorInfo = (props) => {
  const defaultCode = '000: Error Info'
  const defaultMessage = 'Any explanation or information showed here.'
  const { code = defaultCode, message = defaultMessage } = props

  return (
    <S_Wrapper>
      <C_Head title={code} description={message} />
      <S_Code>{code}</S_Code>
      <S_Message>{message}</S_Message>
      <h5>
        Go back to <a href="/">home.</a>
      </h5>
    </S_Wrapper>
  )
}

const S_Wrapper = styled.main`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 0 var(--spaceX-xl);
  height: 100vh;

  ${S_Screen.lg`
    padding: 0;
  `}

  a {
    ${S_BorderBottomAnimation}
  }
`

const S_Code = styled.h1`
  margin-bottom: var(--spaceY-lg);
`

const S_Message = styled.h5`
  margin-bottom: var(--spaceY-lg);
`
