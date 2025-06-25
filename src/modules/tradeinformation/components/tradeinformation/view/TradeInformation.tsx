import { Typography } from '@ui/typography'
import { useTranslation } from 'react-i18next'

import { tradeinformation } from '@utils/constants/constants'

export const TradeInformation = () => {
  const { t } = useTranslation()

  const { title } = tradeinformation
  return (
    <div>
      <Typography as="h1">{t(title)}</Typography>
    </div>
  )
}
