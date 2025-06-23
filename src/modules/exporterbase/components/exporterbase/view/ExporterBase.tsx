import { Typography } from '@ui/typography'
import { useTranslation } from 'react-i18next'

import { exporterBaseText } from '@utils/constants/constants'

export const ExporterBase = () => {
  const { t } = useTranslation()

  const { title } = exporterBaseText

  return (
    <div>
      <Typography as="h1">{t(title)}</Typography>
    </div>
  )
}
