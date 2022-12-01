import React from 'react'
import { FaThumbsUp,FaHeart } from "react-icons/fa";

const Post = () => {
  return (
    <div className='main'>
    <main className='main_container post_main'>
        <div className="img_post_section">
            <div className='img-container post_img'>
          <img src="/imgs/avatar.png" alt='posted-Img' className='img posted_img' />
      </div>
      <div className="post_detail">
        <p>hello</p>
      </div>
        </div>
      
     <div className="captions_comments post_pg_comments">
        <div className='post_caption post_pg_caption'>     
          <p>This is for the caption. You can say whatever you want here... </p>
       </div>

      <div className='main_actions'>
          <span>3 likes</span>
          <span>4 saved</span>
          <FaThumbsUp className='icons'/>
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

    </div>
     
      
    </main>

    
  </div>
  )
}

export default Post
