import { gql } from "@apollo/client";
import { ACTIVE_ORDER_FRAGMENT } from "./fragments";


export const ADD_ITEM_TO_ORDER = gql`
mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ...ActiveOrder
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
  ${ACTIVE_ORDER_FRAGMENT}
`