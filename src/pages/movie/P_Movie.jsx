import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { S_Layout } from '@styles'

import { U_useRequest } from '@utils'

const P_Movie = () => {
  const { id } = useParams()
  const MOVIE_URL = `/movies/${id}`

  const { state, U_useGetAuthRequest } = U_useRequest(MOVIE_URL)
  const { loading, error, data, status } = state
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
      <h1>{movie.title}</h1>
      <p>
        <span> {movie.year} </span>
        <span> &middot; </span>
        <span>{convertMinuteToHour(movie.runtime)}</span>
      </p>
      <S_Media>
        <li>
          <img src={movie.cover} alt="movie cover" />
        </li>
        <li>
          <iframe height="315" src={movie.trailer} />
        </li>
      </S_Media>
      <S_Genres>
        {movie.genres.map((genre) => (
          <span key={genre}> &middot; {genre} </span>
        ))}
      </S_Genres>
      <p>{movie.description}</p>
      <S_Stars>
        <span>
          <strong> Stars </strong>
        </span>
        <span>
          {movie.stars.map((star) => (
            <span key={star}> &middot; {star} </span>
          ))}
        </span>
      </S_Stars>
    </S_Wrapper>
  )
}

export default P_Movie

const S_Wrapper = styled.section`
  ${S_Layout}
`

const S_Media = styled.ul`
  --gap: 32px;

  column-count: 2;
  column-gap: var(--gap);

  list-style-type: none;

  li {
    page-break-inside: avoid;
    break-inside: avoid;

    img {
      width: 100%;
    }

    iframe {
      width: 100%;
    }
  }
`

const S_Genres = styled.p`
  text-transform: capitalize;
`

const S_Stars = styled(S_Genres)`
  display: flex;
  flex-flow: row nowrap;
  gap: 24px;
`
