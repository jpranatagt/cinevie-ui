import React from 'react'
import styled, { css } from 'styled-components'

import { S_Screen } from '@styles'
import { U_useIntersection } from './U_useIntersection'

export const C_ImageRenderer = (props) => {
  const { src = '', alt = '', aspectRatio = { xs: '2/3' } } = props

  const [isLoaded, setIsLoaded] = React.useState(false)
  const [isInView, setIsInView] = React.useState(false)

  const ref = React.useRef()

  U_useIntersection(ref, () => {
    setIsInView(true)
  })

  const handleOnLoad = (loaded) => {
    setIsLoaded(loaded)
  }

  const handleAspectRatio = (ratio) => css`
    aspect-ratio: ${ratio};
    @supports not (aspect-ratio: auto) {
      position: relative;
      padding-top: calc((${ratio}) * 100vh);

      height: 0;
    }
  `

  const tagAttributes = {
    ref,
    handleAspectRatio,
    aspectRatio,
  }

  return (
    <S_Wrapper {...tagAttributes}>
      {isInView && (
        <S_Image
          src={src}
          alt={alt}
          onLoad={() => handleOnLoad(true)}
          isLoaded={isLoaded}
        />
      )}
    </S_Wrapper>
  )
}

const S_Wrapper = styled.picture`
  position: relative;
  max-width: 100%;
  max-height: 100%;

  ${(p) => p.handleAspectRatio(p.aspectRatio.xs)}
  overflow: hidden;

  background-color: hsl(var(--primary-5));

  h6 {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    background-color: hsla(var(--primary-background), 0.7);

    font-weight: 500;

    text-align: center;
    opacity: 0;
    transition: opacity 0.6s ease-in;
  }

  :hover {
    h6 {
      opacity: 1;
    }
  }

  ${(p) =>
    p.aspectRatio.sm &&
    S_Screen.sm`
    ${p.handleAspectRatio(p.aspectRatio.sm)}`}

  ${(p) =>
    p.aspectRatio.md &&
    S_Screen.md`
    ${p.handleAspectRatio(p.aspectRatio.md)}`}

  ${(p) =>
    p.aspectRatio.lg &&
    S_Screen.lg`
    ${p.handleAspectRatio(p.aspectRatio.lg)}`}

  ${(p) =>
    p.aspectRatio.xl &&
    S_Screen.xl`
    ${p.handleAspectRatio(p.aspectRatio.xl)}`}

  ${(p) =>
    p.aspectRatio.xxl &&
    S_Screen.xxl`
    ${p.handleAspectRatio(p.aspectRatio.xxl)}`}
`

const S_Image = styled.img`
  @supports not (aspect-ratio: auto) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  width: 100%;
  height: 100%;

  object-fit: cover;
  pointer-events: none;
  filter: ${(p) => (!p.isLoaded ? 'blur(16px)' : 'blur(0px)')};
  transition: filter 1s ease-in;
`
