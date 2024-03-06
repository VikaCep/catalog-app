import React, { createContext, useContext, useState } from 'react';

export interface Variant { id: string, name: string, price: number }
export interface Product {
    id: number,
    name: string,
    description: string,
    assets: [{ source: string }]
    variants: [Variant]
}

interface CartContextType {
    cartItems: Variant[];
    addItemToCart: (item: Variant) => void;
}

const CartContext = createContext<CartContextType>({
    cartItems: [],
    addItemToCart: () => { }
});

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC = ({ children }) => {
    const [cartItems, setCartItems] = useState<Variant[]>([]);

    const addItemToCart = (item: Variant) => {
        setCartItems([...cartItems, item]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart }}>
            {children}
        </CartContext.Provider>
    );
};