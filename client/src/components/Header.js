import { Link } from "react-router-dom"
// import { FaSistrix } from "react-icons/fa";
// import avatar from './avatar.png'

const Header = () => {
  return (
    <div className='header'>
      <header>
        <Link to='/posts'> DisAZ </Link>
        <input className='input-search'type='text'placeholder= "Search..." />
        <Link to='/profile'> <img src='#' alt='avater' className='avatar'/> </Link>
       
      </header>
    </div>
  )
}

export default Header
