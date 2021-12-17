import React from 'react'
import home from './Banner.jpg'
import './Home.css'

function Home() {
    return (
        <div className='home_container'>  
            <img className='home_image' src={home}/>
        </div>
    )
}

export default Home
  