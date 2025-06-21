import { navItem } from '@utils/constants/constants'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import styles from './Navbar.module.scss'

export const Navbar = () => {
  const { t, i18n } = useTranslation()

  const handleLanguageChange = (language: string | undefined) => {
    i18n.changeLanguage(language)
  }

  return (
    <nav className={styles.navbar}>
      {navItem.map(({ link, to }) => (
        <span key={to}>
          <Link to={to}>{t(link)}</Link>
        </span>
      ))}

      <div>
        <button onClick={() => handleLanguageChange('en')}>EN</button>

        <button onClick={() => handleLanguageChange('ru')}>РУС</button>

        <button onClick={() => handleLanguageChange('ky')}>КЫР</button>
      </div>
    </nav>
  )
}
