import React, { createContext, useContext } from 'react';
import useStateWithStorage from './hooks/useStateWithStorage';

export interface Variant { id: string, name: string, price: number }
export interface Product {
    id: number,
    name: string,
    description: string,
    assets: [{ source: string }]
    variants: [Variant]
}

interface CartContextType {
    cartTotal: number,
    updateTotal: (itemPrice: number) => void;
}

const CartContext = createContext<CartContextType>({
    cartTotal: 0,
    updateTotal: () => { }
});

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC = ({ children }) => {
    const [cartTotal, setCartTotal] = useStateWithStorage('cartTotal', 0);

    const updateTotal = (itemPrice: number) => {
        setCartTotal(cartTotal + itemPrice);
    }

    return (
        <CartContext.Provider value={{ cartTotal, updateTotal }}>
            {children}
        </CartContext.Provider>
    );
}
