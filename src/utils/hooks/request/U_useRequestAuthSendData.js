import { U_useRequestAuthSend } from './U_useRequestAuthSend'

export const U_useRequestAuthSendData = (method, url, data) => {
  return U_useRequestAuthSend(method, url, { data })
}
