import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import { AddShoppingCartTwoTone } from '@mui/icons-material'

function header() {
    return (
        <div className='header'> 
            <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/> 
            <div className='header_search'>
                <input className='header_searchInput' type='text'/>
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_LineOne'>Hello Sign in</span>
                    <span className='header_LineTwo'>Account & Lists</span>
                </div>
                <div className='header_option'>
                <span className='header_LineOne'>Returns</span>
                    <span className='header_LineTwo'>&Orders</span>
                </div>
                <div className='header_option'>
                <span className='header_LineOne'>Your</span>
                    <span className='header_LineTwo'>Prime</span>
                </div>
                <div className='header_optionBasket'>
                    <AddShoppingCartTwoTone />
                    <span className='header_LineTwo header_basketCount'>
                        0
                    </span>
                </div>
            </div>
        </div>
    )
}

export default header
