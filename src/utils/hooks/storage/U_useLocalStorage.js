import React from 'react'

export const U_useLocalStorageState = (
  key,
  defaultValue = '',
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) => {
  const [state, setState] = React.useState(() => {
    const localStorageValue = window.localStorage.getItem(key)
    if (localStorageValue) {
      return deserialize(localStorageValue)
    }
    return defaultValue
  })

  React.useEffect(() => {
    window.localStorage.setItem(key, serialize(state))
  }, [key, state])

  return [state, setState, serialize]
}
