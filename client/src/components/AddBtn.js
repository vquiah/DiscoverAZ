import React from 'react'
import {FaGripHorizontal, FaPlus} from "react-icons/fa";
import { Link } from 'react-router-dom';

const AddBtn = () => {
  return (
    <Link to='/create'>
      <div className='see_more'>
        <FaGripHorizontal className='Fa'/>
       <FaPlus className='Fa' />
     </div>
    </Link>
    
  )
}

export default AddBtn
