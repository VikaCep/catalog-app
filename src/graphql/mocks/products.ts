import { Product } from "../../CartContext";
import { GET_PRODUCTS } from "../queries";

export const id1 = "original-document-id";
export const id2 = "another-document-id";


export const mockedProduct1: Product = {
    id: 3,
    description: 'This is the description of product 1',
    name: 'Laptop',
    variants: [{
        price: 15,
        name: 'Super cool and fast',
        id: '2'
    }],
    assets: [{
        source: 'image/path'
    }]
}

export const mockedProduct2: Product = {
    id: 4,
    description: 'This is the description of product 2',
    name: 'Headphones',
    variants: [{
        price: 45,
        name: 'They sound incredibly',
        id: '5'
    }],
    assets: [{
        source: 'image/path'
    }]
}

export const mockedProductList: Product[] = [mockedProduct1, mockedProduct2]

const getMockedProducts = () => ({
    request: {
        query: GET_PRODUCTS,
        variables: {
            options: {
                take: 15
            }
        },
    },
    result: {
        data: {
            products: {
                items: mockedProductList
            },
        },
    },
});

export default getMockedProducts;