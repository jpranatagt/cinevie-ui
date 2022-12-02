import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { S_Layout, S_Screen } from '@styles'

import { U_useRequest } from '@utils'

import { C_Error, C_Head } from '@components'

import { C_Actions } from './C_Actions'

const P_Movie = () => {
  const { id } = useParams()
  const MOVIE_URL = `/movies/${id}`

  const { state, U_useGetAuthRequest } = U_useRequest(MOVIE_URL)
  const { loading, error, data, status, code } = state

  U_useGetAuthRequest()

  if (loading) {
    return (
      <S_Wrapper>
        <p> Loading ... </p>
      </S_Wrapper>
    )
  }

  if (error) {
    const error = {
      statusCode: code,
      message: status,
    }
    return <C_Error {...error} />
  }

  const { movie } = data

  const convertMinuteToHour = (timeInMinutes) => {
    const hour = Math.floor(timeInMinutes / 60)
    const minutes = timeInMinutes % 60

    return `${hour}h ${minutes}m`
  }

  return (
    <S_Wrapper>
      <C_Head title={movie.title} description={movie.description} />
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
      <C_Actions movieId={id} movieTitle={movie.title} />
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
