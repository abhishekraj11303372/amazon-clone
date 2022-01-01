import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import { AddShoppingCartTwoTone } from '@mui/icons-material'
import logo from './amazon_logo.png'
import { useStateValue } from './StateProvider'
import {Link} from 'react-router-dom'

function header() {
    const [{basket}, dispatch] = useStateValue();
    console.log("this is header in the basket ",basket)

    return (
        <div className='header'> 
            <Link to='/'>
                <img className='header_logo' src={logo} alt="Amazon"/> 
            </Link>
            
            <div className='header_search'>
                <input className='header_searchInput' type='text'/>
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className='header_nav'>
                <Link to='/login'>
                <div className='header_option'>
                    <span className='header_LineOne'>Hello Sign in</span>
                    <span className='header_LineTwo'>Account & Lists</span>
                </div>
                </Link>
                <div className='header_option'>
                <span className='header_LineOne'>Returns</span>
                    <span className='header_LineTwo'>&Orders</span>
                </div>
                <div className='header_option'>
                <span className='header_LineOne'>Your</span>
                    <span className='header_LineTwo'>Prime</span>
                </div>

                <Link to='/checkout'>
                    <div className='header_optionBasket'>
                        <AddShoppingCartTwoTone />
                        <span className='header_LineTwo header_basketCount'>
                            {basket?.length}
                        </span>
                     </div>
                </Link>
            </div>
        </div>
    )
}

export default header
