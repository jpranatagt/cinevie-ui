import { lazy } from 'react'

const P_Landing = lazy(() => import('./landing'))
const P_Register = lazy(() => import('./register'))
const P_Login = lazy(() => import('./login'))
const P_Movies = lazy(() => import('./movies'))
const P_Movie = lazy(() => import('./movie'))
const P_New = lazy(() => import('./new'))
const P_Update = lazy(() => import('./update'))
const P_NotFound = lazy(() => import('./not-found'))

export { P_Suspense } from './suspense'

const moviesRead = ['movies:read']
const moviesWrite = ['movies:read', 'movies:write']

export const P_Routes = [
  {
    path: '/',
    page: P_Landing,
    redirectPath: '/movies',
  },
  {
    path: '/register',
    page: P_Register,
    redirectPath: '/movies',
  },
  {
    path: '/login',
    page: P_Login,
    redirectPath: '/movies',
  },
  {
    path: '/movies',
    page: P_Movies,
    permissions: moviesRead,
    redirectPath: '/login',
  },
  {
    path: '/movies/:id',
    page: P_Movie,
    permissions: moviesRead,
    redirectPath: '/login',
  },
  {
    path: '/new',
    page: P_New,
    permissions: moviesWrite,
    redirectPath: '/movies',
  },
  {
    path: '/update/:id',
    page: P_Update,
    permissions: moviesWrite,
    redirectPath: '/movies',
  },
  {
    path: '*',
    page: P_NotFound,
  },
]
