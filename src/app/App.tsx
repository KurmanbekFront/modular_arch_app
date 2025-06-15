import { PokemonList } from '@modules/main-module'
import { CustomButton } from '@ui/button'
import { Layout } from './layout/Layout'

function App() {
  return (
    <>
      <Layout>
        <CustomButton children="Кнопка 1" type="button" />
        <PokemonList />
      </Layout>
    </>
  )
}

export default App
