import React from 'react'

export const U_useMakeStore = (reducer, initialState) => {
  const storeContext = React.createContext()
  const dispatchContext = React.createContext()

  const U_useStoreProvider = ({ children }) => {
    const [store, dispatch] = React.useReducer(reducer, initialState)

    return (
      <dispatchContext.Provider value={dispatch}>
        <storeContext.Provider value={store}>
          {children}
        </storeContext.Provider>
      </dispatchContext.Provider>
    )
  }

  const U_useStore = () => React.useContext(storeContext)

  const U_useDispatch = () => React.useContext(dispatchContext)

  return [U_useStoreProvider, U_useStore, U_useDispatch]
}
