import { U_IsLengthLess, U_IsEmailValid } from '@utils'

export const T_LoginValidation = {
  email: {
    isError: U_IsEmailValid,
    message: 'Please provide correct email address',
  },
  password: {
    isError: (value) => U_IsLengthLess(value, 8),
    message: 'Password must be at least 8 characters',
  },
}
