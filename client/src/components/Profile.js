import React from 'react'
import PostsAndFavs from '../components/PostsAndFavs'



const Profile = () => {
  return (
    <div className='main'>
      <main className='main_container main_profile_container'>
        <section className="main_profile">
            <img src="#" alt="profile image" className='profile_img stack' />
            <img src="#" alt="profile avatar" className='profile_avatar stack' />
            <button className='edit_btn stack'>Edit Profile</button>
        </section>
        <section className="profile_space">
            <span className='user_name'>Victory</span>
        </section>
      </main>
      <PostsAndFavs/>
    </div>
  )
}

export default Profile
