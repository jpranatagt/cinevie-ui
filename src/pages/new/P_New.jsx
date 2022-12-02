import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { T_NewModel } from './T_NewModel'
import { T_NewValidation } from './T_NewValidation'

import { S_Layout } from '@styles'

import { U_useRequest } from '@utils'

import { C_Head, C_Form } from '@components'

const P_New = () => {
  const initialState = {
    title: '',
    description: '',
    cover: '',
    trailer: '',
    year: 0,
    runtime: 0,
    genres: [],
    stars: [],
  }

  const ADD_URL = '/movies'
  const message = {
    onDefault: 'Add movie',
    onRequest: 'Sending the movie data ...',
    onSuccess: 'The movie has been added.',
  }

  const { state, U_usePostAuthRequest } = U_useRequest(
    ADD_URL,
    message
  )

  const { status } = state

  const history = useHistory()
  React.useEffect(() => {
    if (status === message.onSuccess) {
      setTimeout(() => history.push('/movies'), 3000)
    }
  }, [status])

  return (
    <S_Wrapper>
      <C_Head
        title="Add New Movie"
        description="Adding new movie information into CineVie database"
      />
      <h3>Add a new movie</h3>
      <C_Form
        model={T_NewModel}
        validation={T_NewValidation}
        initialState={initialState}
        title={status}
        handlePost={U_usePostAuthRequest}
      />
    </S_Wrapper>
  )
}

export default P_New

const S_Wrapper = styled.section`
  ${S_Layout}

  display: flex;
  flex-direction: column;
  gap: var(--spaceY-xxl);
`
