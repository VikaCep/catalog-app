import { gql } from "@apollo/client";

export const PRODUCTS = gql`
    query {
        products(options: {take: 10}) {
            items {
                id
                name
                description
                assets {
                    source
                }
            }
        }
    }
`