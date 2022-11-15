import React from 'react'
import styled from 'styled-components'

import { S_Screen } from '@styles'

const T_Images = [
  'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg',
  'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg',
  'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg',
  'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX67_CR0,0,67,98_AL_.jpg',
  'https://m.media-amazon.com/images/M/MV5BOTM0NWFjNGYtNjExMS00ZTZlLWFiYmMtZmU4ZjZkMmMxZTNjXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_UY98_CR5,0,67,98_AL_.jpg',
  'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR0,0,67,98_AL_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg',
]

export const C_MoviesCover = () => {
  return (
    <S_Wrapper>
      {T_Images.map((src, index) => (
        <li key={src}>
          <img src={src} alt={`Movie cover ${index + 1}`} />
        </li>
      ))}
    </S_Wrapper>
  )
}

const S_Wrapper = styled.ul`
  --gap: var(--spaceX-md);

  ${S_Screen.md`
    --gap: var(--spaceX-lg);
  `}

  ${S_Screen.lg`
    --gap: var(--spaceX-xl);
  `}

  column-count: 5;
  column-gap: var(--gap);

  li {
    margin-bottom: var(--gap);

    page-break-inside: avoid;
    break-inside: avoid;

    ${S_Screen.lg`
      :last-child {
        display: none;
      }
    `}
  }

  ${S_Screen.lg`
    column-count: 3;
  `}
`
