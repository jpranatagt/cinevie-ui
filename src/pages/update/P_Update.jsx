import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { S_Layout } from '@styles'

import { U_useRequest } from '@utils'

import { T_NewModel } from './T_NewModel'
import { T_UpdateValidation } from './T_UpdateValidation'

import { C_Form } from '@components'

const P_Update = () => {
  const { id } = useParams()
  const MOVIE_URL = `/movies/${id}`
  const message = {
    onDefault: 'Update',
    onRequest: 'Updating movie ...',
    onSuccess: 'Send update',
  }

  const { state: getMovieState, U_useGetAuthRequest } =
    U_useRequest(MOVIE_URL)
  const { loading, error, data, status } = getMovieState

  const { state: patchMovieState, U_usePatchAuthRequest } =
    U_useRequest(MOVIE_URL, message)
  const {
    loading: patchLoading,
    error: patchError,
    status: patchStatus,
  } = patchMovieState

  U_useGetAuthRequest()

  const history = useHistory()
  React.useEffect(() => {
    if (patchStatus === message.onSuccess) {
      setTimeout(() => history.push(MOVIE_URL), 3000)
    }
  }, [patchStatus])

  if (loading) {
    return (
      <S_Wrapper>
        <p> Loading ... </p>
      </S_Wrapper>
    )
  }

  if (error) {
    return (
      <S_Wrapper>
        <p>{JSON.stringify(status)} </p>
      </S_Wrapper>
    )
  }

  const { movie } = data
  delete movie.id
  delete movie.version

  const updateDynamic = {
    genres: movie.genres,
    stars: movie.stars,
  }

  return (
    <S_Wrapper>
      <h3>Update the movie</h3>
      <C_Form
        model={T_NewModel}
        validation={T_UpdateValidation}
        initialState={movie}
        updateDynamic={updateDynamic}
        title={patchStatus}
        handlePost={U_usePatchAuthRequest}
      />
    </S_Wrapper>
  )
}

export default P_Update

const S_Wrapper = styled.section`
  ${S_Layout}

  display: flex;
  flex-flow: column nowrap;
  gap: var(--spaceY-xxl);
`
