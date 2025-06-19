import type { FC, ReactNode } from 'react'

import styles from './Typography.module.scss'

type Variant = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'
type Size = 'sm' | 'md' | 'lg' | 'xl'
type Weight = 'normal' | 'medium' | 'bold'
type Align = 'left' | 'center' | 'right'

interface TypographyProps {
  as?: Variant
  size?: Size
  weight?: Weight
  align?: Align
  className?: string
  children: ReactNode
}

export const Typography: FC<TypographyProps> = ({
  as: Component = 'p',
  size = 'md',
  weight = 'normal',
  align = 'left',
  children,
}) => {
  return (
    <Component className={`${styles[size]} ${styles[weight]} ${styles[align]}`}>
      {children}
    </Component>
  )
}
