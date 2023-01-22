import React from 'react'


const Landing = () => {
  return (
   <main>
    <nav>
      <h3 className='logo'>DisAZ</h3>
    </nav>
    <div className="container page">
      <h1>Discover Arizona Hub</h1>
      <p>Ever wonder what's out there to do? Well you are in the right place. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, rerum repellat quisquam quasi nam molestiae amet possimus praesentium optio dolor labore rem assumenda consequuntur nulla laudantium perferendis aliquid quae fugit.</p>
      <button className='btn btn-hero'>Login/Register</button>
    </div>
    <div className="">
      <img src='/landing.svg' alt="landing-page-img" className='img main-img'/>
    </div>
   </main>
  )
}

export default Landing
