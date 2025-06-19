import { navItem } from '@utils/constants/constants'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {navItem.map(({ link, to }) => (
        <span key={to}>
          <Link to={to}>
            <p>{link}</p>
          </Link>
        </span>
      ))}
    </nav>
  )
}
