import type { FC } from 'react'

import styles from './Header.module.scss'
import { Navbar } from '../../navbar/view/Navbar'

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Navbar />
    </header>
  )
}
