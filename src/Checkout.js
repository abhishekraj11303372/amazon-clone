import React from 'react'
import Subtotal from './Subtotal'
import './Checkout.css'

function Checkout() {
    return (
        <div className='checkout'>
            <div className='.checkout_title'>
                <h2>Shopping Cart</h2>
            </div>
            <div className='.checkout_right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
