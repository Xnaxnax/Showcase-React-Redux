import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

export default function Layout() {

  const cart = useSelector(state => state.cart.itemsInCart);

  return (
    <div>
      <header className='header'>  
            <div className="container">
              <div className="header_wrapper">
                <NavLink className='header_item' to="/">Каталог</NavLink>
                <div>
                <NavLink className='header_item' to="/link">Корзина</NavLink>
                { cart.length > 0 ? <span className='header_tracker'>{cart.length}</span> : '' }
                </div>
                
              </div>
            </div>
        </header>

        <main className='main container'>
            <Outlet />      
        </main>
    </div>
  )
}
