import { PokemonList } from '@modules/main-module/components/pokemon-list/view/PokemonList'
import { CustomButton } from '@ui/button'

function App() {
  return (
    <>
      <CustomButton children="Кнопка 1" type="button" />
      <PokemonList />
    </>
  )
}

export default App
