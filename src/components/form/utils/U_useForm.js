import React from 'react'

export const U_useForm = ({
  initialState,
  setDynamicInput,
  dynamicInput,
  validation,
  handlePost,
}) => {
  const [values, setValues] = React.useState(initialState)
  const [errors, setErrors] = React.useState({})

  const validateInput = (name, value) => {
    const { isError, message } = validation[name]

    if (isError(value)) {
      setErrors({
        ...errors,
        [name]: message,
      })
    } else {
      delete errors[name]
    }
  }

  const convertNumberToString = (object) => {
    Object.keys(object).forEach((property) => {
      if (typeof object[property] === 'number') {
        object[property] = object[property].toString()
      }
    })

    return object
  }

  const handleStaticInputChange = (event) => {
    event.preventDefault()

    const { name, value } = event.target

    validateInput(name, value)

    setValues({ ...values, [name]: value })
  }

  const handleDynamicInputChange = (event, index) => {
    event.preventDefault()
    const { name, value } = event.target

    validateInput(name, value)

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

  const isObjectEmpty = (object) => Object.keys(object).length === 0

  const handleSubmit = (event) => {
    event.preventDefault()

    if (isObjectEmpty(errors)) {
      const stringifiedObject = convertNumberToString(values)

      handlePost(stringifiedObject)

      setValues(initialState)
      event.target.reset()
    }
  }

  return {
    values,
    errors,
    handleStaticInputChange,
    handleDynamicInputChange,
    handleSubmit,
    addInput,
    removeInput,
  }
}
