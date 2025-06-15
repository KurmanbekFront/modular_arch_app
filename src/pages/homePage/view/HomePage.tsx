import { PokemonList } from '@modules/main-module'
import { CustomButton } from '@ui/button'
import { Typography } from '@ui/typography'
import type { FC } from 'react'

export const HomePage: FC = () => {
  return (
    <>
      <CustomButton children="Кнопка 1" type="button" />
      <PokemonList />
      <Typography children="wfefwddedes" as="div" align="center" size="xl" weight="bold" />
    </>
  )
}
