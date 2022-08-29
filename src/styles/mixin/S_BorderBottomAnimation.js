import { css } from 'styled-components'

export const S_BorderBottomAnimation = css`
  position: relative;

  display: inline-block;
  margin-block: 2px;

  backface-visibility: hidden;

  ::after {
    position: absolute;
    left: 0;
    bottom: 0;

    content: '';
    width: 100%;
    height: 1px;

    background-color: hsl(var(--primary-text));

    transform: scaleX(1);
    transform-origin: left;
    transition: transform 0.5s ease;
  }

  :hover::after {
    transform: scaleX(0);
  }
`
