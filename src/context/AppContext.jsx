import { createContext,useState } from "react";

export const UsuarioContext = createContext()

export const AppContext = ({ children }) => {
  const [openShop,setOpenShop] = useState(false)
  function openShoppingCart(){
    setOpenShop(!openShop)
    document.body.style.overflow = openShop ? 'auto':'hidden';
  }
  return (
    <UsuarioContext.Provider value={{openShop,openShoppingCart}}>
      { children }
    </UsuarioContext.Provider>
  )
}