import React from 'react'
import styled from 'styled-components'

import { C_Input } from './C_Input'

export const C_Form = (props) => {
  const {
    model = {},
    initialState = {},
    updateDynamic = {},
    title = 'Submit',
    handlePost = () => {},
    gap = 'lg',
  } = props

  const [values, setValues] = React.useState(initialState)

  const isDynamic = (inputs) => {
    if (inputs) {
      return { ...inputs }
    }

    return {}
  }

  const convertNumberToString = (object) => {
    Object.keys(object).forEach((property) => {
      if (typeof object[property] === 'number') {
        object[property] = object[property].toString()
      }
    })

    return object
  }

  const [dynamicInput, setDynamicInput] = React.useState(
    isDynamic(updateDynamic || model.dynamic)
  )

  const handleStaticInputChange = (event) => {
    event.preventDefault()

    const { name, value } = event.target

    setValues({ ...values, [name]: value })
  }

  const handleDynamicInputChange = (event, index) => {
    event.preventDefault()
    const { name, value } = event.target

    values[name][index] = value

    setValues({
      ...values,
    })
  }

  const addInput = (key, input) => {
    dynamicInput[key] = [...dynamicInput[key], input]
    setDynamicInput({ ...dynamicInput })
  }

  const removeInput = (key, index) => {
    const copyOfValues = { ...values }
    const copyOfDynamicInput = { ...dynamicInput }

    copyOfValues[key].splice(index, 1)
    copyOfDynamicInput[key].splice(index, 1)

    setValues({ ...copyOfValues })
    setDynamicInput({ ...copyOfDynamicInput })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const stringifiedObject = convertNumberToString(values)

    handlePost(stringifiedObject)

    setValues(initialState)
    event.target.reset()
  }

  return (
    <S_Wrapper gap={gap} onSubmit={(event) => handleSubmit(event)}>
      {model.static?.map((item, index) => (
        <C_Input
          key={item.name}
          value={values[item.name]}
          handleChange={handleStaticInputChange}
          index={index}
          required
          {...item}
        />
      ))}

      {dynamicInput?.genres?.map((item, index) => (
        <S_DynamicInput key={`${item.name}${index}`}>
          <C_Input
            value={values[item.name] || item}
            handleChange={handleDynamicInputChange}
            index={index}
            required
            {...item}
          />
          <S_Button
            type="button"
            onClick={() => removeInput('genres', index)}
          >
            Remove
          </S_Button>
        </S_DynamicInput>
      ))}
      {model.dynamic?.genres?.map((item, index) => (
        <S_Button
          type="button"
          key={index}
          onClick={() => addInput('genres', item)}
        >
          Add more {item.name}
        </S_Button>
      ))}

      {dynamicInput?.stars?.map((item, index) => (
        <S_DynamicInput key={`${item.name}${index}`}>
          <C_Input
            value={values[item.name] || item}
            handleChange={handleDynamicInputChange}
            index={index}
            required
            {...item}
          />
          <S_Button
            type="button"
            onClick={() => removeInput('stars', index)}
          >
            Remove
          </S_Button>
        </S_DynamicInput>
      ))}
      {model.dynamic?.stars?.map((item, index) => (
        <S_Button
          type="button"
          key={index}
          onClick={() => addInput('stars', item)}
        >
          Add more {item.name}
        </S_Button>
      ))}
      <S_Button type="submit">{title}</S_Button>
    </S_Wrapper>
  )
}

const S_Wrapper = styled.form`
  display: flex;
  flex-flow: column nowrap;
  gap: var(--spaceY-${(p) => p.gap});
`

const S_DynamicInput = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`

const S_Button = styled.button`
  --color: hsl(var(--primary-90));

  background-color: var(--color);
  border-color: var(--color);
  border-style: solid;
  color: hsl(var(--primary-background));

  font-size: var(--spaceY-md);

  cursor: pointer;
`
