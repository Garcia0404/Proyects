import React,{ useState } from 'react'

export const NavbarMenu = () => {
  const [openSidebar,setOpenSidebar] = useState(false)
  function open(){
    setOpenSidebar(!openSidebar)
  }
  const openbar1 = openSidebar?'rotate-45':''
  const openbar2 = openSidebar?'opacity-0':''
  const openbar3 = openSidebar?'-rotate-45':''
  const color = openSidebar?'bg-black':'bg-white'
  return (
    <button onClick={open} className='flex md:hidden flex-col w-10 h-10 border-none pe-3 py-px bg-transparent gap-2 justify-center'>
      <div className={`${openbar1} ${color} h-0.5 w-full rounded transition-all duration-300 origin-left`}></div>
      <div className={`${openbar2} ${color} h-0.5 w-full rounded transition-all duration-300 origin-left`}></div>
      <div className={`${openbar3} ${color} h-0.5 w-full rounded transition-all duration-300 origin-left`}></div>
    </button>  
  )
}
