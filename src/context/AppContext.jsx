import { createContext,useEffect,useState } from "react";

export const UsuarioContext = createContext()

export const AppContext = ({ children }) => {
  const [openShop,setOpenShop] = useState(false)
  function openShoppingCart(){
    setOpenShop(!openShop)
    document.body.style.overflow = openShop ? 'auto':'hidden';
  }

  const [cartItems,setCartItems] = useState([])
  function addCart(product){
    setCartItems([...cartItems,product])
    console.log(cartItems)
  }


  
  return (
    <UsuarioContext.Provider value={{openShop,openShoppingCart,cartItems,setCartItems,addCart}}>
      { children }
    </UsuarioContext.Provider>
  )
}