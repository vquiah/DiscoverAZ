import { Outlet } from 'react-router-dom'
import Header from './Header'
import AddBtn from '../components/AddBtn'



const SharedLayout = () => {
  return (
    <>
      <Header/>
      <AddBtn />
      <Outlet/>
    </>
  )
}

export default SharedLayout
