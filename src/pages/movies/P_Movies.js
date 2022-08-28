import React from 'react'
import styled from 'styled-components'

import { U_useRequest } from '@utils'

const P_Movies = () => {
  const MOVIES_URL = '/movies'

  const { state, U_useGetRequest } = U_useRequest(MOVIES_URL)
  const { loading, error, data, message } = state
  U_useGetRequest()

  if (loading) {
    return (
      <section>
        <p> Loading ... </p>
      </section>
    )
  }

  if (error) {
    return (
      <section>
        <p>{JSON.stringify(message)} </p>
      </section>
    )
  }

  const { metadata, movies } = data

  const convertMinuteToHour = (timeInMinutes) => {
    const hour = Math.floor(timeInMinutes / 60)
    const minutes = timeInMinutes % 60

    return `${hour}h ${minutes}m`
  }

  return (
    <section>
      <p>List of movies </p>
      {movies.map((movie) => (
        <article key={movie.title}>
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
              <iframe width="420" height="315" src={movie.trailer} />
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
        </article>
      ))}
    </section>
  )
}

export default P_Movies

const S_Media = styled.ul`
  --gap: 32px;
  padding: 0;

  column-count: 2;
  column-gap: var(--gap);

  list-style-type: none;

  li {
    page-break-inside: avoid;
    break-inside: avoid;

    img {
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
