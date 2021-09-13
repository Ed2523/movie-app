import React, { useState } from 'react'
import '../styles/App.css'

const Header = () => {
    const [menuState, setMenuState] = useState(false)
    const openMenu = () => {
        menuState ? setMenuState(false) : setMenuState(true)
    }

    return (
        <div className='header'>
            <div className="logo-search">

                <div data-testid='logo' className='logo'>
                    <i className="fas fa-film"></i>
                </div>
                <form data-testid='search' className='search'>
                    <input type="text" placeholder='Search Homes' />
                </form>

            </div>
            <ul data-testid='menu' className={menuState ? 'menu menu-open' : 'menu menu-closed'} >
                <li>Login</li>
                <li>Sign up</li>
            </ul>
            <div className="burger" onClick={openMenu}>
                <span id={menuState ? 'burger-span1-open' : 'burger-span1'}></span>
                <span id={menuState ? 'burger-span2-open' : 'burger-span2'}></span>
                <span id={menuState ? 'burger-span3-open' : 'burger-span3'}></span>


            </div>
        </div>
    )
}




export default Header
