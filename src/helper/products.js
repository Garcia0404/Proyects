export const productos = async()=>{
  const res = await fetch('https://fakestoreapi.com/products')
  const json = await res.json()
  return json
} 