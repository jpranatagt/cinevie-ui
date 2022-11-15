import React from 'react'
import styled, { css } from 'styled-components'

export const C_Input = (props) => {
  const {
    handleChange,
    label,
    value,
    index,
    errors,
    name,
    ...restProps
  } = props

  return (
    <S_Wrapper>
      <S_Input
        onChange={(event) => handleChange(event, index)}
        name={name}
        defaultValue={value}
        {...restProps}
      />
      {label ? (
        <S_Label shrink={value.length || errors[name]}>
          {errors[name] ? errors[name] : label}
        </S_Label>
      ) : null}
    </S_Wrapper>
  )
}

const shrinkLabel = css`
  top: -32%;
  font-size: var(--font-size);
`

const S_Wrapper = styled.article`
  position: relative;

  --font-size: 10px;
  --padding: var(--spaceX-md);
`

const S_Label = styled.label`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: var(--padding);

  pointer-events: none;
  transition: top 300ms ease;

  ${(p) => p.shrink && shrinkLabel}
`

const S_Input = styled.input`
  padding: 0 var(--padding);
  background: hsl(var(--primary-20));

  width: calc(100% - (2 * var(--padding)));

  border: none;
  box-shadow: 0px 20px 40px hsl(var(--primary-10));

  focus {
    &:focus ~ ${S_Label}, &:active ~ ${S_Label} {
      top: -32%;
      font-size: var(--font-size);
      color: hsl(var(--primary-30));
    }
  }
`
