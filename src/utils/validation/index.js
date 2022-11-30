export const U_IsEmpty = (value) => {
  console.log(value)
  return (
    value.length === 0 &&
    value === '' &&
    value.replace(/^\s+|\s+$/gm, '') === ''
  )
}

export const U_IsLengthLess = (value, length) =>
  value.length < length && !U_IsEmpty(value)

export const U_IsLessThan = (value, target) =>
  value < target && !U_IsEmpty(value)

export const U_IsMoreThan = (value, target) =>
  value > target && !U_IsEmpty(value)

export const U_IsEmailValid = (address) => {
  const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

  return !pattern.test(address)
}

export const U_IsURLValid = (url) => {
  const pattern =
    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/

  return !pattern.test(url)
}

export const U_IsArrayContains = (
  firstArray = [],
  secondArray = []
) => {
  if (Array.isArray(firstArray) && Array.isArray(secondArray)) {
    return !!firstArray.some((v) => secondArray.indexOf(v) !== -1)
  }

  const firstConverted = Array.from(firstArray)
  const secondConverted = Array.from(secondArray)

  return !!firstConverted.some(
    (v) => secondConverted.indexOf(v) !== -1
  )
}
