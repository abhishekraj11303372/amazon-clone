import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import {Link} from 'react-router-dom'

function Payment() {
    const [{basket,user}, dispatch] = useStateValue();
    
    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>Checkout (<Link to="/checkout">{basket?.length } items</Link>)</h1>
            
                <div className='payment_section'>
                    <div className='title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='address'>
                        <p>{user?.email}</p>
                        <p>Old Airport Road, Murgesh Palya</p>
                        <p>Bangalore, India</p>
                    </div>
                </div>
                <div className='payment_section'>
                    <div className='title'>
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className='address'>
                    { basket.map(item => (<CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating} 
                    />))}
                    </div>
                </div>
                <div className='payment_section'>
                    <div className='title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='details'>
                        <h3>Card Details</h3>
                        <input value="Card Number"/>
                        <input value="MM/YY/CVV"/>
                     <button >Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
