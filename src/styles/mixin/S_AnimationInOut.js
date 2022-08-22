import { keyframes, css } from 'styled-components'

const S_FadeIn = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(var(--spaceY-lg));
  }

  100% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`

const S_FadeOut = keyframes`
  0% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(var(--spaceY-lg));
  }
`

export const S_AnimationIn = css`
  animation: ${S_FadeIn} 0.5s ease-in;
`

export const S_AnimationOut = css`
  animation: ${S_FadeOut} 0.5s ease-out;
`

