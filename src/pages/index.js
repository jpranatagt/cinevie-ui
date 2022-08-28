import { lazy } from 'react'

const P_Login = lazy(() => import('./login'))
const P_Movies = lazy(() => import('./movies'))

export const P_Routes = [
  {
    path: '/login',
    component: P_Login
  },
  {
    path: '/movies',
    component: P_Movies
  }
]

