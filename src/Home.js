import React from 'react'
import home from './Banner.jpg'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div home_container>  
                <img className='home_image' src={home} alt='banner'/>
                <div className='home_row'>
                <Product />
                <Product />
                <Product />
            </div>
            <div className='home_row'>
                <Product />
                <Product />
                <Product />
            </div>
            <div className='home_row'>
                <Product />
                <Product />
                <Product /> 
            </div>
            </div>
            
        </div>
    )
}

export default Home
  