import { Typography } from '@ui/typography'

import { aboutText } from '@utils/constants/constants'

export const About = () => {
  const { title, desc } = aboutText

  return (
    <div>
      <Typography as="h1">{title}</Typography>
      <Typography>{desc}</Typography>
    </div>
  )
}
