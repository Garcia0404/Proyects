import React, { useState,useContext } from 'react'
import { UsuarioContext } from '../../context/AppContext';
import {ShoppingCart} from './Shoppingcart/ShoppingCart';
import {NavbarMenu} from './Sidebar/NavbarMenu'
import { Sidebar } from './Sidebar/Sidebar';
export function Navbar() {
  const [openSidebar,setOpenSidebar] = useState(false)
  const{openShop}=useContext(UsuarioContext)
  const{openShoppingCart}=useContext(UsuarioContext)
  function changeSidebar(){
    setOpenSidebar(!openSidebar)
    document.body.style.overflowY = openSidebar ? 'auto' : 'hidden';
  }
  return (

      <header className='bg-[#01050E] text-white grid grid-cols-auto md:flex w-full p-3 items-center md:justify-between'>
        <div onClick={changeSidebar} className='z-10 md:hidden'>
          <NavbarMenu></NavbarMenu>
        </div>
        <Sidebar open={openSidebar}></Sidebar>
        <div className='text-3xl text-center cursor-pointer'>Online shop</div>
        <div className='flex justify-end gap-2 md:order-3'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          <svg onClick={openShoppingCart} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          <ShoppingCart></ShoppingCart>
        </div>
        <div className="relative w-full md:w-3/5 col-start-1 col-end-4 mt-3.5 md:m-0">
          <input className='rounded-2xl w-full py-2 px-5 text-black' type="text" placeholder='Busca productos, marcas y más ...'/>
          <svg className='absolute top-0 bottom-0 my-auto cursor-pointer end-0 w-6 h-6 stroke-2 stroke-[#01050E] mr-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>
      </header>
    
  )
}
