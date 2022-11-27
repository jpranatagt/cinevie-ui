import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { S_Layout, S_Screen } from '@styles'

import { U_useRequest } from '@utils'

import { C_ImageRenderer } from '@components'

const P_Movies = () => {
  const MOVIES_URL = '/movies'
  const message = {
    onDefault: 'Movie List',
    onRequest: 'Loading movie list',
    onSuccess: 'Movie List',
  }

  const { state, U_useGetAuthRequest } = U_useRequest(
    MOVIES_URL,
    message
  )
  const { loading, error, data, status } = state
  U_useGetAuthRequest()

  if (loading) {
    return (
      <S_Wrapper>
        <h3> {status} </h3>
      </S_Wrapper>
    )
  }

  if (error) {
    return (
      <S_Wrapper>
        <h3> {status} </h3>
      </S_Wrapper>
    )
  }

  const { metadata, movies } = data

  return (
    <S_Wrapper>
      <h3>{status}</h3>
      <S_MoviesWrapper>
        {movies.map((movie) => (
          <S_Movie key={movie.title}>
            <S_Cover>
              <Link to={`/movies/${movie.id}`}>
                <C_ImageRenderer
                  src={movie.cover}
                  alt={movie.title}
                />
              </Link>
            </S_Cover>
            <S_Details>
              <h4>
                <strong>{movie.title}</strong>
              </h4>
              <S_Time>
                <span>{movie.year}</span>
                <span>{movie.runtime} min</span>
              </S_Time>
              <S_Genres>
                {movie.genres.map((genre) => (
                  <li key={genre}>
                    {' '}
                    <h6>{genre}</h6>{' '}
                  </li>
                ))}
              </S_Genres>
            </S_Details>
          </S_Movie>
        ))}
      </S_MoviesWrapper>
    </S_Wrapper>
  )
}

export default P_Movies

const S_Wrapper = styled.section`
  ${S_Layout}

  display: flex;
  flex-direction: column;
  gap: var(--spaceY-lg);

  ${S_Screen.md`
    gap: var(--spaceY-xxl);
  `}
`

const S_MoviesWrapper = styled.ul`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  gap: var(--spaceY-xl);

  ${S_Screen.md`
    flex-flow: row nowrap;
    gap: 7%;
  `}
`
const S_Movie = styled.li`
  flex: 1 0 100%;

  display: flex;
  flex-flow: row nowrap;
  gap: var(--spaceY-lg);

  ${S_Screen.md`
    flex: 1 0 24%;
    flex-flow: column nowrap;
  `}
`

const S_Cover = styled.picture`
  flex: 0 0 30%;

  img {
    width: 100%;
  }

  ${S_Screen.md`
    flex: 0 0 50%;
  `}
`

const S_Details = styled.article`
  display: flex;
  flex-direction: column;
  gap: var(--spaceY-lg);
  justify-content: center;

  ${S_Screen.md`
    align-content: start;
  `}
`

const S_Time = styled.section`
  display: flex;
  gap: var(--spaceX-lg);

  color: hsl(var(--primary-60));
`

const S_Genres = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spaceX-lg);

  text-transform: capitalize;
  list-style-type: none;
`
