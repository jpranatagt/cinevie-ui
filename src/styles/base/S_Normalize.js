import { css } from 'styled-components'

export const S_Normalize = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  caption,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  address {
    display: inline;
  }

  table,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 300;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-family: RA, Arial, Helvetica, 'Trebuchet MS', Verdana,
      'sans-serif';
    font-weight: 400;
    line-height: 1.5;

    background-color: hsl(var(--primary-background));
    color: hsl(var(--primary-text));
  }

  body,
  pre {
    scrollbar-color: hsl(var(--primary-40)) hsl(var(--primary-0));

    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-track {
      background: hsl(var(--primary-60));
      border-radius: var(--spaceX-sm);
    }
    &::-webkit-scrollbar-thumb {
      border-radius: var(--spaceX-sm);
      background-color: hsl(var(--primary-30));
      border: 1px solid hsl(var(--primary-background));
    }
  }

  a {
    &,
    &:visited,
    &:active {
      text-decoration: none;
      background-color: none;
      color: inherit;
    }
  }

  input,
  input:hover,
  input:focus,
  textarea,
  textarea:hover,
  textarea:focus,
  select,
  select:hover,
  select:focus {
    font: inherit;

    outline: none;
    color: hsl(var(--primary-text));

    ::placeholder {
      color: hsl(var(--primary-95));
    }
  }

  input {
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  input {
    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ul {
    list-style-type: none;
  }

  ::selection {
    background-color: hsl(var(--primary-90));
    color: hsl(var(--primary-20));
  }

  #root,
  #__next {
    isolation: isolate;
  }
`
