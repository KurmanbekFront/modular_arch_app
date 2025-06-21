import { Typography } from '@ui/typography'

import { aboutText } from '@utils/constants/constants'
import { useTranslation } from 'react-i18next'

export const About = () => {
  const { t } = useTranslation()
  const { title, desc } = aboutText

  return (
    <div>
      <Typography as="h1">{t(title)}</Typography>
      <Typography>{t(desc)}</Typography>
    </div>
  )
}
