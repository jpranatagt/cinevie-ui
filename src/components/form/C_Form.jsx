import React from 'react'
import styled from 'styled-components'

import { C_Input } from './C_Input'

export const C_Form = (props) => {
  const {
    model = {},
    initialState = {},
    title = 'Submit',
    handlePost = () => {},
  } = props

  const [values, setValues] = React.useState(initialState)

  const handleChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target

    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    handlePost(values)

    setValues(initialState)
    event.target.reset()
  }

  return (
    <S_Wrapper onSubmit={(event) => handleSubmit(event)}>
      {model.map((item, index) => (
        <C_Input
          key={index}
          type={item.type}
          name={item.name}
          label={item.label}
          value={values[item.name]}
          list={item.listId ? item.listId : null}
          handleChange={handleChange}
          required
        />
      ))}
      <button type="submit">{title}</button>
    </S_Wrapper>
  )
}

const S_Wrapper = styled.form`
  display: flex;
  flex-flow: column nowrap;
  gap: var(--spaceY-lg);
`
