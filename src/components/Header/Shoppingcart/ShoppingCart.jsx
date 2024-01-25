import React,{useContext} from 'react'
import  CardCart  from './CardCart';
import {newproducts} from '../../../utils/produts.js'
import { UsuarioContext } from '../../../context/AppContext.jsx';
export const ShoppingCart = () => {
  const{openShop}=useContext(UsuarioContext)
  const{openShoppingCart}=useContext(UsuarioContext)

//Mejorar esto-------------------------------------------------
  const close = openShop?'overflow-auto absolute top-0 right-0 h-dvh w-full min-[350px]:w-80 bg-white text-black z-[10] shadow-[0_0_0_100vmax_rgba(0,0,0,.5)] translate-x-0 visible transition-all ease-in-out duration-300':'absolute top-0 right-0 h-dvh w-3/4 sm:w-2/5 rounded-s-3xl bg-white text-black z-[10] shadow-[0_0_0_100vmax_rgba(0,0,0,.5)] translate-x-[100%] invisible transition-all ease-in-out duration-300'

  return (
    <>
      <section className={close}>
        <div className='w-full z-3 p-2'>
          <ul className='list-none grid gap-2'>
            {
              newproducts.map((product)=>(
              <li key={product.id}><CardCart id={product.id} nombreProducto={product.nombreProducto} precio={product.precio}/></li>))
            }
          </ul>
        </div>
        <footer className='sticky bottom-0 right-0 bg-white border border-gray-200 grid grid-rows-2 grid-cols-2 gap-2 px-2 pb-2'>
          <div className='pt-3 px-3 col-start-1 col-end-3'>Total:</div>
          <button onClick={openShoppingCart} type='button' className='bg-gray-300 rounded-xl p-2'>Cerrar</button>
          <button type='button' className='bg-main text-white rounded-xl p-2'>Continuar</button>
        </footer>
      </section>
    </>
  )
}
