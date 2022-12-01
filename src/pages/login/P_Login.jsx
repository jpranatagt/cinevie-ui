import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { S_Layout, S_Screen } from '@styles'
import { U_useRequest, U_usePermissionsUpdate } from '@utils'

import { T_LoginModel } from './T_LoginModel'
import { T_LoginValidation } from './T_LoginValidation'

import { C_Form } from '@components'

import { C_Guidance } from './C_Guidance'

const P_Login = () => {
  const initialState = {
    email: '',
    password: '',
  }

  const AUTHENTICATION_URL = '/tokens/authentication'
  const message = {
    onDefault: 'Login',
    onRequest: 'Loggin in ...',
    onSuccess: 'Login success!',
  }

  const history = useHistory()
  const { U_useAddPermissions } = U_usePermissionsUpdate()
  const { state, U_usePostAuthRequest } = U_useRequest(
    AUTHENTICATION_URL,
    message
  )
  const { status } = state

  const formProperties = {
    model: T_LoginModel,
    validation: T_LoginValidation,
    initialState: initialState,
    title: status,
    handlePost: U_usePostAuthRequest,
    gap: 'xl',
  }

  const isLoggedIn = status === message.onSuccess

  React.useEffect(() => {
    if (isLoggedIn) {
      U_useAddPermissions()
      setTimeout(() => history.push('/movies'), 3000)
    }
  }, [status])

  return (
    <S_Wrapper>
      <C_Guidance />
      <C_Form {...formProperties} />
    </S_Wrapper>
  )
}

export default P_Login

const S_Wrapper = styled.section`
  ${S_Layout}

  margin-top: var(--spaceY-xxl);

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
