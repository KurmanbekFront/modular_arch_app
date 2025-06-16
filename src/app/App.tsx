import { HomePage } from '@pages/index'
import { Layout } from './layout/Layout'

import '@app/styles/global.scss'

function App() {
  return (
    <>
      <Layout>
        <HomePage />
      </Layout>
    </>
  )
}

export default App
