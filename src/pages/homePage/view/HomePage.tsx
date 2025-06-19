import { PokemonList } from '@modules/main-module'
import { CustomButton } from '@ui/button'
import { Modal } from '@ui/modal'
import { Typography } from '@ui/typography'
import { useState, type FC } from 'react'

import styles from './HomePage.module.scss'

export const HomePage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className={styles.container}>
        <PokemonList />
        <Typography children="wfefwddedes" as="div" align="center" size="xl" weight="bold" />
        <CustomButton children="Open Modal" onClick={() => setIsModalOpen(true)} />
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          Modal window
        </Modal>
        <CustomButton children="Кнопка 1" type="button" />
      </div>
    </>
  )
}
