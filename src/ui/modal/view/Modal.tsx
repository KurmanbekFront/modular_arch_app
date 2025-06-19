import type { FC } from 'react'
import type { ModalProps } from '../types/types'
import ReactDOM from 'react-dom'

import styles from './Modal.module.scss'

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div onClick={onClose} className={styles.modalOverlay}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body,
  )
}
