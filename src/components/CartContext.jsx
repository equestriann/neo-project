import React, { createContext, useContext, useState} from "react";

const CartContext = createContext({
    cart: [],
})

export const useCart = () => {
    return useContext(CartContext)
}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id)
        if (existingItem) {
            const updatedCart = cart.map(cartItem => {
                if (cartItem.id === item.id) {
                    return {...cartItem, quantity: cartItem.quantity + 1}
                }
                return cartItem
            })
            setCart(updatedCart)
        } else {
            setCart([...cart, {...item, quantity:1}])
        }
    }

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0)

    return (
        <CartContext.Provider value={{ cart, addToCart, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}