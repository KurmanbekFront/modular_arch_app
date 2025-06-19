import { Typography } from '@ui/typography'
import ReactPlayer from 'react-player/youtube'

import { description } from '@utils/constants/constants'
import styles from './Player.module.scss'

export const Player = () => {
  const { text } = description

  return (
    <div>
      <Typography as="h1">React Player</Typography>
      <div className={styles.wrapper}>
        <ReactPlayer
          url="https://youtu.be/LWtHl__oEWc?si=CLIzwPOPN3q-eCDd"
          width="100%"
          height="100%"
          controls
        />
      </div>
      <Typography as="p">{text}</Typography>
    </div>
  )
}
