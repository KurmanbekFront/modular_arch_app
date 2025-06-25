import { Typography } from '@ui/typography'
import { exportdevelopment } from '@utils/constants/constants'
import { useTranslation } from 'react-i18next'

export const ExportDevelopment = () => {
  const { t } = useTranslation()

  const { title } = exportdevelopment
  return (
    <div>
      <Typography as="h1">{t(title)}</Typography>
    </div>
  )
}
