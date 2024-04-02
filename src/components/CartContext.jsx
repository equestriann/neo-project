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
        setCart([...cart, item])
    }

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}