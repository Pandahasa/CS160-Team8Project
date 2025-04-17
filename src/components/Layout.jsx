import TopBar from './TopBar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <TopBar />
      <main>
        <Outlet />
      </main>
    </>
  )
}