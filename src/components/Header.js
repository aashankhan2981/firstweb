import React from 'react'
import Logo from "../svgs/logo.svg"
import Emojis from "../svgs/emojis.svg"
import Menu from "../svgs/menu.svg"
import { Link } from 'react-router-dom'
import { Responsive } from './Responsive'
export const Header = ({toggle,change}) => {
    const print = ()=>{console.log("Hello")}
    return (

        <div className='container py-11 md:px-4 px-4  mx-auto flex md:justify-between justify-between  space-x-5 md:space-x-0  items-center' >

            <img src={Menu} onClick={(e)=>{change(!toggle);console.log(toggle)}} alt="menu-icon" className='cursor-pointer hover:bg-yellow-400 md:hidden  ' />
             
            <span>
            <div className='relative cursor-pointer top-2.5'><img src={Logo} className='' alt="logo" />
            <img src={Emojis} className='animate-bounce relative left-10 bottom-6 ' alt="emoji" />
            </div></span>

            <div className='md:flex hidden space-x-10 justify-center items-center md:px-4'>
                
                <Link to="/" className='text-lg eight:text-base hover:text-brand-button1  ' >Home</Link>
                <Link to="/" className='text-lg eight:text-base hover:text-brand-button1 ' >About</Link>
                <Link to="/" className='text-lg eight:text-base hover:text-brand-button1 ' >Blog </Link>
                <Link to="/" className='text-lg eight:text-base hover:text-brand-button1 ' >Contact us</Link>
                <Link to="/" className='text-lg eight:text-base hover:text-yellow-400  text-brand-button1 font-bold' >Try Now</Link>
                
            </div>
            
        </div>
    )
}
