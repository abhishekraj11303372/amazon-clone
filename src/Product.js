import React from 'react'
import productimage from './product1.jpg'
import './Product.css'

function Product() {
    return (
        <div className='product'>
            <div className='product_info'>
                <p>Top rated, premium quality | Amazon Brands & more</p>
                <p className='produvt_price'>
                <small>$</small>
                <strong>1.99</strong>
                </p>
                    <div className='product_rating'>
                        <p>⭐</p>
                    </div>
            </div>    
            <img src={productimage} alt='product' />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
