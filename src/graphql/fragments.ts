import { gql } from "@apollo/client";

export const ACTIVE_ORDER_FRAGMENT = gql`
fragment ActiveOrder on Order {
    id
    code
    currencyCode
    totalQuantity
    totalWithTax
    lines {
      id
      unitPriceWithTax
      quantity
    }
  }`