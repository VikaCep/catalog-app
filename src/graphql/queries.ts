import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
query GetProducts($options: ProductListOptions) {
    products(options: $options) {
        items {
            id
            name
            description
            assets {
                source
            }
            variants {
                id
                name
                price
            }
        }
    }
}
`