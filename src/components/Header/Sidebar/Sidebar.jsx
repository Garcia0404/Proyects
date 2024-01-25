import React from 'react'
export const Sidebar = ({open}) => {

  const close = open?'absolute top-0 left-0 md:hidden h-dvh w-3/4 min-[500px]:w-1/2 rounded-e-3xl bg-white text-black z-[3] shadow-[0_0_0_100vmax_rgba(0,0,0,.5)] translate-x-0 visible transition-all ease-in-out duration-300':'absolute top-0 left-0 md:hidden h-dvh w-3/4 sm:w-2/5 rounded-e-3xl bg-white text-black z-[10] shadow-[0_0_0_100vmax_rgba(0,0,0,.5)] translate-x-[-100%] invisible transition-all ease-in-out duration-300'
  return (
    <section className={close}>
      <ul className='h-full flex flex-col px-10 pt-28 gap-4 list-none text-xl'>
        <li><a href="src/pages/Perifericos/perifericos.html">Periféricos</a></li>
        <li><a href="src/pages/Monitores/monitores.html">Monitores</a></li>
        <li><a href="src/pages/Placas/placas.html">Placas Madre</a></li>
        <li><a href="src/pages/Ram/ram.html">Memorias Ram</a></li>
        <li><a href="src/pages/Cases/cases.html">Cases</a></li>
        <li><a href="src/pages/Procesadores/procesadores.html">Procesadores</a></li>
        <li><a href="src/pages/GPU/gpu.html">Tarjetas de Video</a></li>
      </ul>
    </section>
  )
}
