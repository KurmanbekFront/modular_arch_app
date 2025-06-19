import type { FC } from 'react'
import type { ContainerProps } from '../types/types'

import styles from './Container.module.scss'

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}
