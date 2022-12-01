import React from 'react'
import styled from 'styled-components'

import { S_Screen } from '@styles'

export const C_PaginateNavigation = (props) => {
  console.log(props)
  const {
    dispatch,
    setDynamicURL,
    current_page,
    first_page,
    last_page,
  } = props

  const ENDPOINT = '/movies?page'

  const refetch = (URL) => {
    const REFETCH_TYPE = 'refetch'
    setDynamicURL(URL)
    dispatch({
      type: REFETCH_TYPE,
    })
  }

  const prevPage = (currentPage) => currentPage - 1
  const nextPage = (currentPage) => currentPage + 1

  const changePage = (pageNumber) => {
    const URL = `${ENDPOINT}=${pageNumber}`
    refetch(URL)
  }

  const goToPrevPage = (currentPage) => {
    changePage(prevPage(currentPage))
  }

  const goToNextPage = (currentPage) => {
    changePage(nextPage(currentPage))
  }

  const isCurrent = (currentPage, pageNumber) =>
    currentPage === pageNumber

  const shouldShowCurrentPage = ({
    currentPage,
    firstPage,
    lastPage,
  }) => {
    const isWall =
      isCurrent(currentPage, firstPage) ||
      isCurrent(currentPage, lastPage)

    return !isWall
  }

  const isPrevAllowed = (currentPage, firstPage) => {
    const isInBoundary = prevPage(currentPage) >= firstPage

    return isInBoundary
  }

  const isNextAllowed = (currentPage, lastPage) => {
    const isInBoundary = nextPage(currentPage) <= lastPage

    return isInBoundary
  }

  return (
    <S_Wrapper>
      {isPrevAllowed(current_page, first_page) && (
        <h6 onClick={() => goToPrevPage(current_page)}>PREV</h6>
      )}

      <S_PageNumber
        isCurrent={isCurrent(current_page, first_page)}
        onClick={() => changePage(first_page)}
      >
        {first_page}
      </S_PageNumber>

      {shouldShowCurrentPage({
        currentPage: current_page,
        firstPage: first_page,
        lastPage: last_page,
      }) && <S_PageNumber isCurrent> {current_page} </S_PageNumber>}

      <S_PageNumber
        isCurrent={isCurrent(current_page, last_page)}
        onClick={() => changePage(last_page)}
      >
        {last_page}
      </S_PageNumber>

      {isNextAllowed(current_page, last_page) && (
        <h6 onClick={() => goToNextPage(current_page)}>NEXT</h6>
      )}
    </S_Wrapper>
  )
}

const S_Wrapper = styled.nav`
  margin-top: var(--spaceY-xl);

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: var(--spaceX-lg);

  h6 {
    cursor: pointer;
  }

  ${S_Screen.md`
    margin-top: var(--spaceY-md);
  `}
`

const S_PageNumber = styled.h6`
  color: ${(p) =>
    p.isCurrent
      ? 'hsl(var(--primary-text))'
      : 'hsl(var(--primary-50))'};

  transition: color 0.35s ease-in;

  :hover {
    color: hsl(var(--primary-text));
  }
`
