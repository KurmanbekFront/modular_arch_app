import { navItem, navItemContact } from '@utils/constants/constants'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import styles from './Navbar.module.scss'

export const Navbar = () => {
  const { t, i18n } = useTranslation()

  const handleLanguageChange = (language: string | undefined) => {
    i18n.changeLanguage(language)
  }
  const { contacts } = navItemContact

  return (
    <>
      <nav className={styles.navbar}>
        {/* {navItem.map(({ link, to }) => (
          <span key={to}>
            <Link to={to}>{t(link)}</Link>
          </span>
        ))} */}

        {navItem.map(({ link, to, subItems }) => (
          <div key={link} className={styles.navItem}>
            {/* <Link to={to}>{t(link)}</Link> */}

            {subItems ? (
              <span>{t(link)}</span>
            ) : (
              <Link to={to!}>{t(link)}</Link>
            )}

            {subItems && (
              <div className={styles.dropdown}>
                {subItems.map(({ link, to }) => (
                  <Link key={to} to={to} className={styles.dropdownLink}>
                    {t(link)}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        <Link to="#anchor">{t(contacts)}</Link>
        <div className={styles.translateBtn}>
          <button onClick={() => handleLanguageChange('en')}>EN</button>

          <button onClick={() => handleLanguageChange('ru')}>РУС</button>

          <button onClick={() => handleLanguageChange('ky')}>КЫР</button>
        </div>
      </nav>
    </>
  )
}
