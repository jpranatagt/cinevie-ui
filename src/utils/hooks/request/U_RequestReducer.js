import { T_RequestAction } from './T_RequestAction'

export const U_RequestReducer = (state, action) => {
  switch (action.type) {
    case T_RequestAction.REQUEST:
      return { ...state, status: action.payload.status }
    case T_RequestAction.ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        status: action.payload.status,
      }
    case T_RequestAction.SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status,
      }
  }
}
