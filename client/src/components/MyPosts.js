import React from 'react'

const MyPosts = () => {
  return (
    <div className='main'>
    <main className='main_container main_card_container'>
     <section className="post_card">
        <div className="post_img_container">
            <img src="#" alt="post img" className="post_img" />
        </div>
        <div className="post_info">
            <span className="likes main_card">3 likes</span>
            <span className="comments main_card">4 comments</span>
        </div>
     </section>
     
     <section className="post_card">
        <div className="post_img_container">
            <img src="#" alt="post img" className="post_img" />
        </div>
        <div className="post_info">
            <span className="likes main_card">3 likes</span>
            <span className="comments main_card">4 comments</span>
        </div>
     </section>

     <section className="post_card">
        <div className="post_img_container">
            <img src="#" alt="post img" className="post_img" />
        </div>
        <div className="post_info">
            <span className="likes main_card">3 likes</span>
            <span className="comments main_card">4 comments</span>
        </div>
     </section>
     <section className="post_card">
        <div className="post_img_container">
            <img src="#" alt="post img" className="post_img" />
        </div>
        <div className="post_info">
            <span className="likes main_card">3 likes</span>
            <span className="comments main_card">4 comments</span>
        </div>
     </section>
    </main>
    
  </div>
  )
}

export default MyPosts
