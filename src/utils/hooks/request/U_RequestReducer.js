import { T_RequestAction } from './T_RequestAction'

export const U_RequestReducer = (state, action) => {
  switch (action.type) {
    case T_RequestAction.REQUESTING:
      return { ...state }
    case T_RequestAction.ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        message: action.payload.message,
      }
    case T_RequestAction.SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      }
  }
}
