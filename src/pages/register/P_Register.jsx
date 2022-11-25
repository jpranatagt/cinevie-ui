import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { S_Layout, S_Screen } from '@styles'
import { U_useRequest } from '@utils'

import { T_RegisterModel } from './T_RegisterModel'
import { T_RegisterValidation } from './T_RegisterValidation'

import { C_Form } from '@components'

import { C_Guidance } from './C_Guidance'

const P_Register = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
  }

  const AUTHENTICATION_URL = '/users'
  const message = {
    onDefault: 'Register',
    onRequest: 'Registering ...',
    onSuccess: "Congratulations! You're registered!",
  }

  const history = useHistory()
  const { state, U_usePostAuthRequest } = U_useRequest(
    AUTHENTICATION_URL,
    message
  )
  const { status } = state

  const isLoggedIn = status === message.onSuccess

  if (isLoggedIn) {
    setTimeout(() => history.push('/'), 3000)
  }

  const formProperties = {
    model: T_RegisterModel,
    validation: T_RegisterValidation,
    initialState: initialState,
    title: status,
    handlePost: U_usePostAuthRequest,
    gap: 'xl',
  }

  return (
    <S_Wrapper>
      <C_Guidance />
      <C_Form {...formProperties} />
    </S_Wrapper>
  )
}

export default P_Register

const S_Wrapper = styled.section`
  ${S_Layout}

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: var(--spaceX-xl);

  ${S_Screen.lg`
    flex-flow: row nowrap;
    gap: var(--spaceX-xxl);
  `}
`
