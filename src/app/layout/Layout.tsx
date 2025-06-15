import { Footer } from '@modules/footer'
import { Header } from '@modules/header'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
