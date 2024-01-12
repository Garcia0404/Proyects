import React from 'react'
import { useState } from 'react';

export function CardVenta({nombreProducto, uid, stock="unknow", precio, children}) {
  const precioD = parseFloat(precio);
  const dolares = (precioD / 3.70).toFixed(2);
// cambio de color del corazón
  const [heart,setHeart] = useState(false)
  function handleClick (){
    setHeart(!heart)
  }
  const classHeart = (heart)?'fill-white':'fill-transparent stroke-2 stroke-white'  

  return (
    <article className='group/item relative w-48 border border-gray-200 rounded-xl text-center p-3'>
      <img src={`./src/img/${uid}.jpg`} alt={uid}/>
      <h3>{nombreProducto}</h3>
      <p>{children}</p>
      <span>{uid} <br></br> Stock: {stock}</span>
      <button type='button' className='bg-[#131921] text-white block rounded w-11/12 mx-auto p-1 text-nowrap'>${dolares} - S/{precio}</button>

      <div className='absolute top-0 start-0 group/edit invisible scale-0 transition-all group-hover/item:visible group-hover/item:scale-100'>
        <div className='m-2 p-2 rounded-full bg-[#131921] cursor-pointer'>
          <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512">
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/>
          </svg>
        </div>
        <div className='m-2 p-2 rounded-full bg-[#131921] cursor-pointer' onClick={handleClick}>
          <svg className={classHeart} xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 24 24">
            <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </div>
      </div>
    </article>
  )
}
