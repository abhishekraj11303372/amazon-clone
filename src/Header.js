import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'

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
                    <span className='header_LineOne'>Hello Guest</span>
                    <span className='header_LineTwo'>Sign In</span>
                </div>
                <div className='header_option'>
                <span className='header_LineOne'>Hello Guest</span>
                    <span className='header_LineTwo'>Sign In</span>
                </div>
                <div className='header_option'>
                <span className='header_LineOne'>Hello Guest</span>
                    <span className='header_LineTwo'>Sign In</span>
                </div>
            </div>
        </div>
    )
}

export default header
