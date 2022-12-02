import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import styled from 'styled-components'

import { S_BorderBottomAnimation } from '@styles'

import {
  U_useIsPermitted,
  U_useRequest,
  U_useModalDialog,
} from '@utils'

export const C_Actions = ({ movieId, movieTitle }) => {
  const writePermissions = ['movies:read', 'movies:write']
  const message = {
    onDefault: 'DELETE',
    onRequest: 'DELETING',
    onSuccess: 'DELETED',
  }
  const MOVIE_URL = `/movies/${movieId}`

  const [U_useToggleDeleteModalDialog, C_DeleteModalDialog] =
    U_useModalDialog()
  const { state, U_useDeleteAuthRequest } = U_useRequest(
    MOVIE_URL,
    message
  )
  const { status } = state

  const isPermitted = (permissions) => U_useIsPermitted(permissions)

  const history = useHistory()
  React.useEffect(() => {
    if (status === message.onSuccess) {
      setTimeout(() => {
        U_useToggleDeleteModalDialog()
        history.push('/movies')
      }, 3000)
    }
  }, [status])

  return isPermitted(writePermissions) ? (
    <S_Wrapper>
      <Link to={`/update/${movieId}`}> UPDATE </Link>
      <S_ButtonDelete onClick={() => U_useToggleDeleteModalDialog()}>
        DELETE
      </S_ButtonDelete>
      <C_DeleteModalDialog
        title="DELETE MOVIE"
        proceedTitle={status}
        description={`Are you sure you want to delete '${movieTitle}' movie?`}
        handleProceed={() => U_useDeleteAuthRequest()}
      />
    </S_Wrapper>
  ) : null
}

const S_Wrapper = styled.section`
  display: flex;
  justify-content: end;
  gap: var(--spaceX-xl);

  a {
    ${S_BorderBottomAnimation}
  }
`

const S_ButtonDelete = styled.button`
  --color: hsl(var(--primary-90));

  background-color: var(--color);
  border-color: var(--color);
  border-style: solid;
  color: hsl(var(--primary-background));

  font-size: var(--spaceY-md);

  cursor: pointer;
`
