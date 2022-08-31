import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { S_Layout } from '@styles'
import { U_useRequest } from '@utils'

import { T_LoginModel } from './T_LoginModel'

import { C_Form } from '@components'

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
  const { state, U_usePostAuthRequest } = U_useRequest(
    AUTHENTICATION_URL,
    message
  )
  const { status } = state

  const isLoggedIn = status === message.onSuccess

  if (isLoggedIn) {
    setTimeout(() => history.push('/'), 3000)
  }

  return (
    <S_Wrapper>
      <C_Form
        model={T_LoginModel}
        initialState={initialState}
        title={status}
        handlePost={U_usePostAuthRequest}
      />
    </S_Wrapper>
  )
}

export default P_Login

const S_Wrapper = styled.section`
  ${S_Layout}
`
