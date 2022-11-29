import React from 'react'
import { FaThumbsUp,FaHeart,FaGripHorizontal, FaPlus  } from "react-icons/fa";


const Main = () => {
  return (
    <div className='main'>
      <main className='main_container'>
        <div className='img-container'>
            <img src="/imgs/avatar.png" alt='posted-Img' className='img posted_img' />
        </div>

        <div className='post_caption'>     
            <p>This is for the caption. You can say whatever you want here... </p>
        </div>

        <div className='main_actions'>
            <span>3 likes</span>
            <span>4 saved</span>
            <FaThumbsUp/>
            <FaHeart/>
            </div>
        
        <div className='divider'></div>

        <div className='new_comment'>
            <div className='avatar'>
                <img src='#' alt='avater'/>
            </div>
            <input type='text' placeholder= "write your comment here" />
          
           
        </div>
        <div className='posted_comments'>
            <div className='avatar'>
                <img src='#' alt='avater'/>
            </div>
            <span className='post_user'>Henry: this is nice</span>
            <FaThumbsUp className='posted_comment_like'/>
        </div>
        <button className='view-com'>view all comments</button>
        
      </main>
      <div className='see_more'>
      <FaGripHorizontal className='Fa'/>
      <FaPlus className='Fa' />
      </div>
      
    </div>
  )
}

export default Main
