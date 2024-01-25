import React,{useEffect} from 'react'
import {CardVenta} from './CardVenta'
import { newproducts } from '../../utils/produts'
import {productos} from '../../helper/products'

export function Slider() {
  useEffect(()=>{
    productos().then(res=>console.log(res))
  },[])
  return (
    <>
      <div className="p-3">
        <img className='rounded-2xl' width='100%' height='auto' src='src/assets/img/banner3.jpg' alt="banner" />
      </div>
      <section className='grid grid-cols-5 gap-3 p-3'>
        <h2 className='col-span-full grid-cols-auto text-2xl font-semibold'>Nuevos Productos</h2>
        {
          newproducts.map((product)=>(
            <CardVenta key={product.id} nombreProducto={product.nombreProducto} id={product.id} stock={product.stock} precio={product.precio}></CardVenta>
          ))
        }
      </section>
    </>
  )
}
