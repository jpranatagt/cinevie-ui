import { U_useRequestSend } from './U_useRequestSend'

export const U_useRequestSendData = (method, url, data) => {
  return U_useRequestSend(method, url, { data })
}
