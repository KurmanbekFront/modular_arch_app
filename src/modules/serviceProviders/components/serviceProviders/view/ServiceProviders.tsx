import { Typography } from '@ui/typography'
import { useTranslation } from 'react-i18next'

import { serviceProvidersText } from '@utils/constants/constants'

export const ServiceProviders = () => {
  const { t } = useTranslation()

  const { title } = serviceProvidersText
  return (
    <div>
      <Typography as="h1">{t(title)}</Typography>
    </div>
  )
}
