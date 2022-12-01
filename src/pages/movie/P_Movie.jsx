import React from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'

import { S_Layout, S_Screen, S_BorderBottomAnimation } from '@styles'

import { U_useRequest, U_useModalDialog } from '@utils'

const P_Movie = () => {
  const { id } = useParams()
  const [U_useToggleDeleteModalDialog, C_DeleteModalDialog] =
    U_useModalDialog()
  const MOVIE_URL = `/movies/${id}`

  const message = {
    onDefault: 'DELETE',
    onRequest: 'DELETING',
    onSuccess: 'DELETED',
  }

  const { state: movieRequestState, U_useGetAuthRequest } =
    U_useRequest(MOVIE_URL)
  const { state: deleteRequestState, U_useDeleteAuthRequest } =
    U_useRequest(MOVIE_URL, message)
  const { loading, error, data, status } = movieRequestState
  const { status: deleteStatus } = deleteRequestState

  U_useGetAuthRequest()

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

  const convertMinuteToHour = (timeInMinutes) => {
    const hour = Math.floor(timeInMinutes / 60)
    const minutes = timeInMinutes % 60

    return `${hour}h ${minutes}m`
  }

  return (
    <S_Wrapper>
      <h3>{movie.title}</h3>
      <S_Time>
        <span> {movie.year} </span>
        <span> &middot; </span>
        <span>{convertMinuteToHour(movie.runtime)}</span>
      </S_Time>
      <S_Media>
        <li>
          <img src={movie.cover} alt="movie cover" />
        </li>
        <li>
          <iframe src={movie.trailer} />
        </li>
      </S_Media>
      <S_Genres>
        {movie.genres.map((genre) => (
          <h6 key={genre}>
            <strong> {genre} </strong>
          </h6>
        ))}
      </S_Genres>
      <p>{movie.description}</p>
      <S_Stars>
        {movie.stars.map((star) => (
          <h6 key={star}>{star}</h6>
        ))}
      </S_Stars>
      <S_Actions>
        <Link to={`/update/${id}`}> UPDATE </Link>
        <S_ButtonDelete
          onClick={() => U_useToggleDeleteModalDialog()}
        >
          DELETE
        </S_ButtonDelete>
        <C_DeleteModalDialog
          title="DELETE MOVIE"
          proceedTitle={deleteStatus}
          description={`Are you sure you want to delete '${movie.title}' movie?`}
          handleProceed={() => U_useDeleteAuthRequest()}
        />
      </S_Actions>
    </S_Wrapper>
  )
}

export default P_Movie

const S_Wrapper = styled.section`
  ${S_Layout}

  display: flex;
  flex-flow: column nowrap;
  gap: var(--spaceY-lg);
`

const S_Time = styled.p`
  color: hsl(var(--primary-60));
`

const S_Media = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  gap: var(--spaceY-xl);

  ${S_Screen.md`
    flex-flow: row nowrap;
  `}

  li:first-child {
    flex: 0 0 100%;

    ${S_Screen.md`
      flex: 0 0 30%;
    `}
  }

  li:last-child {
    flex: 0 0 100%;
    ${S_Screen.md`
      flex: 0 0 68%;
    `}
  }

  img {
    width: 100%;
  }

  iframe {
    height: 100%;
    width: 100%;
  }
`

const S_Genres = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spaceX-lg);

  text-transform: capitalize;
`

const S_Stars = styled(S_Genres)`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spaceX-lg);
`

const S_Actions = styled.section`
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
