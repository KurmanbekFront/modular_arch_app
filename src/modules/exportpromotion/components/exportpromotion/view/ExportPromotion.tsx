import { Typography } from '@ui/typography'
import { exportpromotion } from '@utils/constants/constants'
import { useTranslation } from 'react-i18next'

export const ExportPromotion = () => {
  const { t } = useTranslation()

  const { title } = exportpromotion
  return (
    <div>
      <Typography>{t(title)}</Typography>
    </div>
  )
}
