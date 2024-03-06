import styled from "styled-components";
import { ProductItem } from "./ProductItem";
import useGetProducts from "../graphql/useGetProducts";
import { useState } from "react";

const PRODUCTS_CHUNK = 15;

export interface Product {
  id: number,
  name: string,
  description: string,
  assets: [{ source: string }]
}

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    margin: 20px 100px 0 100px;
`;

const LoadMoreButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #FFA500;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FF8C00;
  }
`;

const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 18px;
`;

export function ProductList() {

  const [limit, setLimit] = useState(PRODUCTS_CHUNK);

  const { loading, error, products } = useGetProducts({ take: limit });

  const handleLoadMore = () => {
    if (limit + PRODUCTS_CHUNK > 100) {
      setLimit(100);
      return;
    }
    setLimit(limit + PRODUCTS_CHUNK);
  }

  if (loading) {
    return <MessageContainer>Loading...</MessageContainer>
  };
  if (error) {
    return <MessageContainer>Error: {error.message}</MessageContainer>
  };

  return <>
    <List>
      {products.map((item: Product) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </List>
    {limit < 100 && <LoadMoreContainer>
      <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
    </LoadMoreContainer>}
  </>
}
