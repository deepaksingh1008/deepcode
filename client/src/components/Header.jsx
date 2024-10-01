import React from 'react'
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <>
            <div className=''>
                <div className='img'>
                    <img src={logo} alt="" />
                </div>
                <nav>
                    <li className='list-none'>Login</li>
                    <li className='list-none'>Register</li>
                    <li className='list-none'>Problems</li>
                </nav>
            </div>
        </>
    )
}

export default Header