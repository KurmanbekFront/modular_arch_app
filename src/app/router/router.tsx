import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@app/layout/Layout'
import { PATHS } from '@utils/constants/constants'
import * as Pages from '@pages/index'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: PATHS.home,
        element: <Pages.HomePage />,
      },
      {
        path: PATHS.about,
        element: <Pages.AboutPage />,
      },
      {
        path: PATHS.player,
        element: <Pages.PlayerPage />,
      },
    ],
  },
])
