import { Footer } from '@modules/footer'
import { Header } from '@modules/header'
import { Outlet } from 'react-router'

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
