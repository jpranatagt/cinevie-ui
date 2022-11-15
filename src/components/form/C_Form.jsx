import React from 'react'
import styled from 'styled-components'

import { U_useForm } from './utils'

import { C_Input } from './C_Input'

export const C_Form = (props) => {
  const {
    model = {},
    validation = {},
    initialState = {},
    updateDynamic = {},
    title = 'Submit',
    handlePost = () => {},
    gap = 'lg',
  } = props

  const isDynamic = (inputs) => {
    if (inputs) {
      return { ...inputs }
    }

    return {}
  }

  const [dynamicInput, setDynamicInput] = React.useState(
    isDynamic(
      Object.keys(updateDynamic).length > 0
        ? updateDynamic
        : model.dynamic
    )
  )

  const {
    values,
    errors,
    handleStaticInputChange,
    handleDynamicInputChange,
    handleSubmit,
    addInput,
    removeInput,
  } = U_useForm({
    initialState,
    setDynamicInput,
    dynamicInput,
    validation,
    handlePost,
  })

  return (
    <S_Wrapper gap={gap} onSubmit={(event) => handleSubmit(event)}>
      {model.static?.map((item, index) => (
        <C_Input
          key={item.name}
          value={values[item.name]}
          errors={errors}
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
            errors={errors}
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
            errors={errors}
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
