import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { render, screen } from '@testing-library/react';
import { CartProvider, useCart } from '../CartContext';
import { Header } from './Header';

describe('Header', () => {
    it('should show the default value for the price', () => {
        render(
            <CartProvider>
                <Header />
            </CartProvider>
        );

        expect(screen.getByText(/Total: \$0/i)).toBeInTheDocument();
    });

    it('should update cart total when updateTotal is called', () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <CartProvider>{children}</CartProvider>
        );
        const { result } = renderHook(() => useCart(), { wrapper });

        act(() => {
            result.current.updateTotal(10);
        });

        expect(result.current.cartTotal).toBe(10);
    });
});

