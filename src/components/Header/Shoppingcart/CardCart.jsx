import React from 'react'
export default function CardCart({id, nombreProducto,precio}) {

  return (
    <li className='bg-gray-100 w-full p-2 grid grid-cols-2 grid-rows-auto gap-2'>
      <img className='m-auto' src={`src/assets/png/image-preview.png`} height='100' width='100' alt={id}/>
      <section>
        <h3 className='text-sm font-light'>{nombreProducto}</h3>
        <span><span className='font-light text-gray-400'>Precio x unidad: </span> <br></br>S/ {precio}</span>
      </section>
      <div className='w-full flex justify-center'>
        <button type='button' className='bg-main text-white rounded-s-3xl w-6'>-</button>
        <span className='m-auto'>1</span>
        <button type='button' className='bg-main text-white rounded-e-3xl w-6'>+</button>
      </div>
      <div className='bg-main rounded-full w-8 h-8 grid place-content-center justify-self-end'>
        <svg className='fill-white stroke-main w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
      </div>

    </li>
  )
}
