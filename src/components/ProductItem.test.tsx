import { screen, render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { ProductItem } from './ProductItem';
import { Product } from '../CartContext';
import { mockedProduct1 } from '../graphql/mocks/products';

const product: Product = { ...mockedProduct1 };

beforeEach(() => {
    render(
        <MockedProvider mocks={[]} addTypename={false}>
            <ProductItem item={product} key={product.id}></ProductItem>
        </MockedProvider>
    );
})

describe('ProductItem', () => {
    it('must render a name, description, variants and a buy button', async () => {
        const name = screen.getByText(/laptop/i);
        const buyBtn = screen.getByRole('button', { name: /buy/i });
        const description = screen.getByText(/This is the description of product 1/i);
        const variant = screen.getByText(/Super cool and fast/i);

        expect(description).toBeInTheDocument();
        expect(variant).toBeInTheDocument();
        expect(name).toBeInTheDocument();
        expect(buyBtn).toBeEnabled();
    });
})