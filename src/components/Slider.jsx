import React from 'react'
import banner2 from '../img/banner2.jpg'
import {CardVenta} from './CardVenta'

export function Slider() {
  return (
    <>
      <div className="p-3">
        <img className='rounded-2xl' width='100%' height='auto' src={banner2} alt="banner" />
      </div>
      <section className='grid grid-cols-5 gap-3 p-3'>
        <h2 className='col-span-full grid-cols-auto text-2xl font-semibold'>Nuevos Productos</h2>
        <CardVenta nombreProducto='Memoria ram' uid='ram' stock='5' precio='276.36'>DDR4 32 GB, Force</CardVenta>
        <CardVenta nombreProducto='Tarjeta de video' uid='gpu' precio='3624.64'>RTX 4070, Nvidia</CardVenta>
        <CardVenta nombreProducto='Tarjeta de video' uid='gpu' precio='3624.64'>RTX 4070, Nvidia</CardVenta>
        <CardVenta nombreProducto='Tarjeta de video' uid='gpu' precio='3624.64'>RTX 4070, Nvidia</CardVenta>
        <CardVenta nombreProducto='Tarjeta de video' uid='gpu' precio='3624.64'>RTX 4070, Nvidia</CardVenta>
        <CardVenta nombreProducto='Tarjeta de video' uid='gpu' precio='3624.64'>RTX 4070, Nvidia</CardVenta>
        <CardVenta nombreProducto='Tarjeta de video' uid='gpu' precio='3624.64'>RTX 4070, Nvidia</CardVenta>
        <CardVenta nombreProducto='Tarjeta de video' uid='gpu' precio='3624.64'>RTX 4070, Nvidia</CardVenta>
        <CardVenta nombreProducto='Tarjeta de video' uid='gpu' precio='3624.64'>RTX 4070, Nvidia</CardVenta>
        <CardVenta nombreProducto='Tarjeta de video' uid='gpu' precio='3624.64'>RTX 4070, Nvidia</CardVenta>

      </section>
    </>
  )
}
