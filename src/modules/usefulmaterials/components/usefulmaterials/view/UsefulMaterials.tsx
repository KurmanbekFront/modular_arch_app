import { Typography } from '@ui/typography'
import { usefulmaterials } from '@utils/constants/constants'
import { useTranslation } from 'react-i18next'

export const UsefulMaterials = () => {
  const { t } = useTranslation()

  const { title } = usefulmaterials

  return (
    <div>
      <Typography as="h1">{t(title)}</Typography>
    </div>
  )
}
