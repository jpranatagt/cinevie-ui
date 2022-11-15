import React from 'react'
import styled, { keyframes } from 'styled-components'

import { S_Screen } from '@styles'

export const T_HamburgerIcon = ({ isOpened, handleMenu }) => {
  return (
    <S_Wrapper onClick={() => handleMenu()} viewBox="0 0 100 100">
      <FirstLine
        isOpened={isOpened}
        x1="50"
        y1="10"
        x2="100"
        y2="10"
      />
      <SecondLine
        isOpened={isOpened}
        x1="0"
        y1="50"
        x2="100"
        y2="50"
      />
      <ThirdLine isOpened={isOpened} x1="0" y1="90" x2="50" y2="90" />
    </S_Wrapper>
  )
}

const S_Wrapper = styled.svg`
  position: relative;
  z-index: 2;
  height: var(--spaceY-lg);

  cursor: pointer;

  line {
    stroke: hsl(var(--primary-text));
    stroke-width: 8px;

    ${S_Screen.md`
      stroke-width: 10px;
    `}
  }

  ${S_Screen.lg`
    display: none;
    visibility: hidden;
  `}
`

const FirstLine = styled.line`
  transform-origin: center right;
  animation: ${(p) =>
      p.isOpened ? RotateFirstLineOpened : RotateFirstLineReverted}
    0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
`

const SecondLine = styled.line`
  transform-origin: center;
  animation: ${(p) =>
      p.isOpened ? RotateSecondLineOpened : RotateSecondLineReverted}
    0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
`

const ThirdLine = styled.line`
  transform-origin: left center;
  animation: ${(p) =>
      p.isOpened ? RotateThirdLineOpened : RotateThirdLineReverted}
    0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
`

const RotateFirstLineOpened = keyframes`
  0% {
    transform: translate(-15%, 10%) rotate(-10deg);
  }

  50% {
    transform: translate(-20%, 20%) rotate(-25deg);
  }

  100% {
    transform: translate(-25%, 30%) rotate(-45deg);
  }
`
const RotateFirstLineReverted = keyframes`
  0% {
    transform: translate(-20%, 20%) rotate(-35deg);
  }

  50% {
    transform: translate(-15%, 10%) rotate(-20deg);
  }

  100% {
    transform: translate(0%, 0%) rotate(0deg);
  }
`

const RotateSecondLineOpened = keyframes`
  0% {
    transform: rotate(-25deg);
  }

  50% {
    transform: rotate(-75deg);
  }

  100% {
    transform: rotate(-135deg);
  }
`

const RotateSecondLineReverted = keyframes`
  0% {
    transform: rotate(-85deg);
  }

  50% {
    transform: rotate(-25deg);
  }

  100% {
    transform: rotate(0deg);
  }
`

const RotateThirdLineOpened = keyframes`
  0% {
    transform: translate(10%, -10%) rotate(-10deg);
  }
  50% {
    transform: translate(15%, -20%) rotate(-25deg);
  }

  100% {
    transform: translate(20%, -30%) rotate(-45deg);
  }
`

const RotateThirdLineReverted = keyframes`
  0% {
    transform: translate(15%, -20%) rotate(-30deg);
  }
  50% {
    transform: translate(10%, -10%) rotate(-10deg);
  }

  100% {
    transform: translate(0, 0%) rotate(0deg);
  }
`
