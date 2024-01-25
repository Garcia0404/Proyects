import React,{useEffect,useState} from 'react'
import {Card} from './Card'
import { newproducts } from '../../utils/produts'
import {productos} from '../../helper/products'

export function Articulos() {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    productos().then(res=>setProducts(res))
  },[])
  return (
    <>
      <div className="p-3">
        <img className='rounded-2xl' width='100%' height='auto' src='src/assets/img/banner.jpg' alt="banner" />
      </div>
      <section className='grid grid-cols-3 md:grid-cols-4 gap-3 p-3'>
        <h2 className='col-span-full grid-cols-auto text-2xl font-semibold'>Nuevos Productos</h2>
        {
          
          products.map((product)=>(
            <Card key={product.id} nombreProducto={product.title} id={product.id} precio={product.price} image={product.image}></Card>
          ))

        }
      </section>
    </>
  )
}
