import { navItem } from '@utils/constants/constants'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import styles from './Navbar.module.scss'

interface NavbarProps {
  children: React.ReactNode
}

export const Navbar = ({ children }: NavbarProps) => {
  const { t } = useTranslation()

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
        {children}
      </nav>
    </>
  )
}
