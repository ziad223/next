'use client'
import { createContext, useEffect, useState } from 'react'
export const CartContext = createContext({})
const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(
        localStorage.getItem('cartItems') ?
        JSON.parse(localStorage.getItem('cartItems')) : []
    );
    const getItemsQty = (id) => {
        return cartItems.find((item) => item.id === id)?.qty || 0
    }
    
    const addToCart = (newItem) => {
        setCartItems((currItems) => {
            const itemExists = currItems.find((item) => item.id === newItem.id);
            if (itemExists) {
                return currItems.map((item) =>
                    item.id === newItem.id ? { ...item, qty: item.qty + 1 } : item
                );
            } else {
                return [...currItems, { ...newItem, qty: 1 }];
            }
        });
    };
    const decreaseCartQty = (id) => {
        setCartItems((currItems) => {
            const item = currItems.find((item) => item.id === id);
            if (item) {
                if (item.qty === 1) {
                    return currItems.filter((item) => item.id !== id);
                } else {
                    return currItems.map((item) => 
                        item.id === id ? { ...item, qty: item.qty - 1 } : item
                    );
                }
            }
            return currItems;
        });
    };
    const removeFromCart = (id) => {
        setCartItems((currItems) => {
            return currItems.filter((item) => item.id !== id)
        })
    }
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

return (
    <CartContext.Provider 
        value={{
            cartItems, 
            getItemsQty, 
            addToCart, 
            decreaseCartQty, 
            removeFromCart
        }}
    >
            {children}
    </CartContext.Provider>
)
}

export default CartProvider