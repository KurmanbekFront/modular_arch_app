import type { FC } from 'react'
import { Navbar } from '@modules/header/components/navbar/view/Navbar'
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <Link to="/">LOGO</Link>
        <a
          href="https://2gis.kg/bishkek/search/%D0%91%D0%B5%D0%BB%D1%8B%D0%B9%20%D0%B4%D0%BE%D0%BC?m=74.829832%2C42.828275%2F9.59" // ← сюда твоя ссылка на 2GIS
          target="_blank"
          rel="noopener noreferrer"
        >
          Белый дом
        </a>

        <a href="mailto:/">Email Link</a>
        <a href="telegram">Telegram</a>
        <a href="instagram">Instagram</a>
        <a href="youtube">YouTube</a>

        <a href="*">Министерство экономики</a>
        <a href="*">Торгово-промышленная палата</a>

        <a href="*">Часто задаваемые вопросы</a>
      </div>

      <Navbar>
        <a href="tel:*">Телефон</a>
        <a href="mailto:/">Электронная почта</a>
        <span>Адрес</span>
      </Navbar>
      <small>&copy;2025 Все права защищены.</small>
      <button>Связаться</button>
      <a>Политика конфиденциальности</a>
      <a>Пользовательское соглашение</a>
    </footer>
  )
}
