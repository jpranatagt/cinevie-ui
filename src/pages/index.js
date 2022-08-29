import { lazy } from 'react'

const P_Login = lazy(() => import('./login'))
const P_Logout = lazy(() => import('./logout'))
const P_Movies = lazy(() => import('./movies'))
const P_Movie = lazy(() => import('./movie'))
const P_New = lazy(() => import('./new'))

export { P_Suspense } from './suspense'

export const P_Routes = [
  {
    path: '/login',
    component: P_Login,
  },
  {
    path: '/logout',
    component: P_Logout,
  },
  {
    path: '/',
    component: P_Movies,
  },
  {
    path: '/movies/:id',
    component: P_Movie,
  },
  {
    path: '/new',
    component: P_New,
  },
]
