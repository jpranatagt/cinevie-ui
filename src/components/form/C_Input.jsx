import React from 'react'
import styled from 'styled-components'

export const C_Input = (props) => {
  const { handleChange, label, value, index, ...restProps } = props

  return (
    <S_Wrapper>
      <S_Input
        onChange={(event) => handleChange(event, index)}
        {...restProps}
        defaultValue={value}
      />
      {label ? (
        <S_Label className={value.length ? 'shrink' : 'nothing'}>
          {label}
        </S_Label>
      ) : null}
    </S_Wrapper>
  )
}

const S_Wrapper = styled.div`
  position: relative;

  --font-size: var(--spaceY-md);
`

const S_Label = styled.label`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12px;

  pointer-events: none;
  transition: top 300ms ease;

  &.shrink {
    top: -32%;
    font-size: var(--font-size);
  }
`

const S_Input = styled.input`
  --padding: var(--spaceX-md);
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
