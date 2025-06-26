import type { FC } from 'react'
import { navItemContact } from '@utils/constants/constants'
import styles from './Header.module.scss'
import { Navbar } from '../../navbar/view/Navbar'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const Header: FC = () => {
  const { t, i18n } = useTranslation()

  const handleLanguageChange = (language: string | undefined) => {
    i18n.changeLanguage(language)
  }

  const { contacts } = navItemContact

  return (
    <header className={styles.header}>
      <Link to="/">LOGO</Link>
      <Navbar>
        <Link to="#anchor">{t(contacts)}</Link>
      </Navbar>

      <div className={styles.translateBtn}>
        <button onClick={() => handleLanguageChange('en')}>EN</button>

        <button onClick={() => handleLanguageChange('ru')}>РУС</button>

        <button onClick={() => handleLanguageChange('ky')}>КЫР</button>
      </div>
    </header>
  )
}
