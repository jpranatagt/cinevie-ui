import React from 'react'
import styled from 'styled-components'

import { S_Layout } from '@styles'

import { U_useRequest } from '@utils'

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
              <img src={movie.cover} alt="movie cover" />
            </S_Cover>
            <S_Details>
              <h4>
                {movie.title} ({movie.year})
              </h4>
              <S_RuntimeGenres>
                <span>{movie.runtime} min</span>
                <span> &#124; </span>
                <S_Genres>
                  {movie.genres.map((genre) => (
                    <li key={genre}> {genre} </li>
                  ))}
                </S_Genres>
              </S_RuntimeGenres>
              <p>{movie.description}</p>
              <S_Stars>
                <span>Stars</span>
                <span>
                  {movie.stars.map((star) => (
                    <h6 key={star}> &middot; {star} </h6>
                  ))}
                </span>
              </S_Stars>
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
`

const S_MoviesWrapper = styled.ul`
  column-count: 2;

  list-style-type: none;
`
const S_Movie = styled.li``

const S_Cover = styled.picture`
  img {
    width: 100%;
  }
`

const S_Details = styled.article``

const S_RuntimeGenres = styled.section`
  display: flex;
  flex-flow: row nowrap;

  gap: 16px;
`

const S_Genres = styled.ul`
  text-transform: capitalize;
  list-style-type: none;
`

const S_Stars = styled(S_RuntimeGenres)`
  display: flex;
  flex-flow: row nowrap;
  gap: 24px;
`
