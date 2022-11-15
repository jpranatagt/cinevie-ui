export const U_IsEmpty = (value) => value.length === 0

export const U_IsLengthLess = (value, length) => value.length < length

export const U_IsLessThan = (value, target) => value < target

export const U_IsMoreThan = (value, target) => value > target

export const U_IsBetweenOf = (value, moreThan, lessThan) =>
  U_IsLessThan(value, lessThan) && U_IsMoreThan(value, moreThan)

export const U_IsEmailValid = (address) => {
  const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

  return !pattern.test(address)
}

export const U_IsURLValid = (url) => {
  const pattern =
    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/

  return !pattern.test(url)
}
