import { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  function addToCart(product) {
    const already = items.find(i => i.id === product.id)
    if (already) {
      toast.info(`${product.name} is already in your cart!`)
      return
    }
    setItems(prev => [...prev, product])
    toast.success(`${product.name} added to cart!`)
  }

  function removeFromCart(productId) {
    const product = items.find(i => i.id === productId)
    setItems(prev => prev.filter(i => i.id !== productId))
    if (product) toast.error(`${product.name} removed from cart.`)
  }

  function clearCart() {
    setItems([])
    toast.success('Checkout successful! Thanks for your purchase.')
  }

  const total = items.reduce((sum, i) => sum + i.price, 0)

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
