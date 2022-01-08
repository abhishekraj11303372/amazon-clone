import React from 'react'
import './Home.css'
import home from './banner.jpg'
import Product from './Product'
import productimage from './product.jfif'
import productimage1 from './product1.jpg'
import productimage2 from './product2.jpg'

function Home() {
    return (
        <div className='home'>
            <div home_container>  
                <img className='home_image' src={home} alt='banner'/>
                <div className='home_row'>
                <Product 
                id="12345"
                title="Top rated, premium quality | Amazon Brands & more"
                price={11.99}
                image={productimage}
                rating={5}
                />
                 <Product 
                id="1234"
                title="Top rated, premium quality | Amazon Brands & more"
                price={11.99}
                image={productimage1}
                rating={5}
                />
            </div>
            <div className='home_row'>
            <Product 
                id="12"
                title="Top rated, premium quality | Amazon Brands & more"
                price={100}
                image={productimage2}
                rating={5}
                />
                 <Product 
                id="1345"
                title="Top rated, premium quality | Amazon Brands & more"
                price={11.99}
                image={productimage}
                rating={5}
                />
                 <Product 
                id="1235"
                title="Top rated, premium quality | Amazon Brands & more"
                price={11.99}
                image={productimage1}
                rating={5}
                />
            </div>
            <div className='home_row'>
            <Product 
                id="2345"
                title="Top rated, premium quality | Amazon Brands & more"
                price={11.99}
                image={productimage2}
                rating={5}
                />
            </div>
            </div>
            
        </div>
    )
}

export default Home
  