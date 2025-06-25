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
        path: PATHS.exporterbase,
        element: <Pages.ExporterBasePage />,
      },
      {
        path: PATHS.usefulmaterials,
        element: <Pages.UsefulMaterailsPage />,
      },
      {
        path: PATHS.tradeinformation,
        element: <Pages.TradeInformationPage />,
      },
      {
        path: PATHS.exportdevelopment,
        element: <Pages.ExportDevelopmentPage />,
      },
      {
        path: PATHS.exportpromotion,
        element: <Pages.ExportPromotionPage />,
      },
    ],
  },
])
