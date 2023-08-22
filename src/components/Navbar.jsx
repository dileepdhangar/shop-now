import React from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const {cart} = useSelector (  (state) => state)  ;
  return (
    <div >
      <nav className='flex  justify-between item-center h-20 max-w-6xl mx-auto'>
        <NavLink to="/">
          <div className='ml-9 mt-3'>
            <img src= '../logo.png' className='h-14 '/>
          </div>
        </NavLink>
        <div className='flex items-center font-medium  space-x-9'>
          <NavLink to="/">
            <div className='text-white text-2xl'>
              <p>Home</p>
            </div>
          </NavLink>
          <NavLink to="/cart">
            <div className='text-white relative'>
              <FaShoppingCart className='text-4xl'/>
             {
              cart.length > 0 && 
              <span className='absolute -top-1 -right-2  bg-green-600 text-xs w-5 h-5 flex justify-center animate-bounce rounded-full text-white'
              > {cart.length} </span>
             }
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

