import { U_useRequestSend } from './U_useRequestSend'

export const U_useRequestAuthSend = (
  method,
  url,
  { data = {} } = {}
) => {
  const authorizationToken = [
    'Authorization',
    'Bearer NS6YG5M72CRE7DIRWDDMKYAKPU',
  ]

  return U_useRequestSend(method, url, { authorizationToken, data })
}
