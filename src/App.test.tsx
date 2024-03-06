import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import { ProductList } from './components/ProductList';

describe('ProductList', () => {
  it('renders without crashing', async () => {
    const { getByText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ProductList />
      </MockedProvider>
    );

    const loadingText = getByText('Loading...');

    expect(loadingText).toBeInTheDocument();
  });
});