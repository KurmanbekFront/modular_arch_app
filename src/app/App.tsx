import { CustomButton } from '@ui/button'

function App() {
  return (
    <>
      <CustomButton children="Кнопка 1" type="button" />
      <CustomButton children="Кнопка 2" type="submit" size="sm" variant="secondary" />
      <CustomButton children="Кнопка 3" type="reset" size="md" variant="danger" />
      <CustomButton children="Кнопка 4" type="button" size="lg" disabled={true} />
    </>
  )
}

export default App
