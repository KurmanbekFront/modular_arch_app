import type { FC } from 'react'
import type { CustomButtonProps } from './types'

import styles from './index.module.scss'

export const CustomButton: FC<CustomButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
}) => {
  return (
    <button
      className={`${styles[variant]} ${styles[size]}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}
