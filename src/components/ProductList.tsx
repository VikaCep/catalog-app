import styled from "styled-components";
import { ProductItem } from "./ProductItem";

export interface ItemInterface {
  id: number,
  content: string
}

const items: ItemInterface[] = [
  { id: 1, content: 'Item 1' },
  { id: 2, content: 'Item 2' },
  { id: 3, content: 'Item 3' },
  { id: 4, content: 'Item 4' },
  { id: 5, content: 'Item 5' },
  { id: 6, content: 'Item 6' },
  { id: 7, content: 'Item 7' },
  { id: 8, content: 'Item 8' },
  { id: 9, content: 'Item 9' },
];

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    margin: 20px 100px 0 100px;
`;

export function ProductList() {
  return <List>
    {items.map(item => <ProductItem item={item} />)}
  </List>
}
