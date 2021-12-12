import React from 'react'
import { Link } from 'react-router-dom'
import { Home } from '../routes/Home'
import { Header } from './Header'

export const Responsive = ({toggle,change}) => {
    return (
        <>
       {toggle? <div className='bg-pink-300 flex flex-col justify-left items-left  w-screen h-screen'>
            <img src="./img/back-icon.png" onClick={()=>{change(!toggle)}} className='hover:bg-yellow-400 mt-3 cursor-pointer pause2 mb-28' alt="back-icon" />

            <div className='flex flex-col justify-end space-y-10 ' >
                <Link to="/" onClick={()=>{change(!toggle)}}  className="text-center   hover:text-brand-button1   text-xl font-bold " >Home</Link>
                <Link to="/courses" onClick={()=>{change(!toggle)}} className="text-center   hover:text-brand-button1   text-xl font-bold  " >Courses</Link>
                <Link to="/about" onClick={()=>{change(!toggle)}} className="text-center   hover:text-brand-button1   text-xl font-bold  " >About</Link>
                <Link to="/contact" onClick={()=>{change(!toggle)}} className="text-center   hover:text-brand-button1   text-xl font-bold  " >Contact us</Link>
            </div>
        </div>:
        <Home toggle={toggle} change={change} />
        
        }
        </>
    )
}
