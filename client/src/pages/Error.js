import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div>
      <h1>404</h1>
      <p>This page connot be found</p>
      <Link to='/'>Return to home page</Link>
    </div>
  )
}

export default Error
