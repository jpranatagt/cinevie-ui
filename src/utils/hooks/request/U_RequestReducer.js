import { T_RequestAction } from './T_RequestAction'

import { U_GenerateNumber } from './U_GenerateNumber'

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
        code: action.payload.code,
      }
    case T_RequestAction.SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status,
        code: action.payload.code,
      }
    case T_RequestAction.RESET:
      return {
        ...state,
        status: action.payload.status,
      }
    case T_RequestAction.UPDATE:
      return { ...state, data: action.payload.data }
    case T_RequestAction.REFETCH:
      return {
        ...state,
        refetch_ref: U_GenerateNumber(),
      }
  }
}
