import React from 'react'
// import { FaSistrix } from "react-icons/fa";
// import avatar from './avatar.png'

const Header = () => {
  return (
    <div className='header'>
      <header>
        <span className='logo'>DisAZ</span>
        <input className='input-search'type='text'placeholder= "Search..." />
        <img src='#' alt='avater' className='avatar'/>
      </header>
    </div>
  )
}

export default Header
