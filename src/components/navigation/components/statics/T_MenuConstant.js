const moviesRead = ['movies:read']
const moviesWrite = ['movies:read', 'movies:write']

export const T_MenuConstant = [
  {
    title: 'MOVIES',
    path: '/movies',
    permissions: moviesRead,
  },
  {
    title: 'NEW',
    path: '/new',
    permissions: moviesWrite,
  },
  {
    title: 'LOGIN',
    path: '/login',
  },
]
