import React from 'react'
import Subtotal from './Subtotal'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
// import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'

function Checkout() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout_title'>
                <h2>Shopping Cart</h2>
                { basket.map(item => (<CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating} 
                />))}
                
            </div>
            <div className='checkout_right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
