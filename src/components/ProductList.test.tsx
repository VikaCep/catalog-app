import { screen, render, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { ProductList } from './ProductList';
import getMockedProducts from '../graphql/mocks/products';

const SuccessResponseMock = getMockedProducts();

beforeEach(() => {
    render(
        <MockedProvider
            mocks={[SuccessResponseMock]}
            addTypename={false}
        >
            <ProductList />
        </MockedProvider>
    );
});

describe('ProductList', () => {

    it('Displays a Loading indication while fetching items', () => {
        const loadingText = screen.getByText(/Loading.../i);
        expect(loadingText).toBeInTheDocument();
    });

    it('must render 2 products', async () => {
        const loadingText = screen.getByText(/Loading.../i);
        await waitFor(() => expect(loadingText).not.toBeInTheDocument());

        const productItems = screen.getAllByTestId('product-item');
        expect(productItems.length).toBe(2);

    });

    it('displays the Load more button', async () => {
        const loadingText = screen.getByText(/Loading.../i);
        await waitFor(() => expect(loadingText).not.toBeInTheDocument());
        const loadMorebutton = screen.getByRole('button', { name: /Load more/i });

        expect(loadMorebutton).toBeInTheDocument();
        expect(loadMorebutton).toBeEnabled();

    });
});