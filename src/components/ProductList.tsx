import styled from "styled-components";
import { ProductItem } from "./ProductItem";
import useGetProducts from "../graphql/useGetProducts";
import { useState } from "react";
import { Product } from "../CartContext";

const PRODUCTS_CHUNK = 15;

export function ProductList() {

  const [limit, setLimit] = useState(PRODUCTS_CHUNK);

  //Obtaining the products. If fetching too many, then the endpoing breaks so it's better to fetch it in smaller amounts
  const { loading, error, products } = useGetProducts({ take: limit });

  const handleLoadMore = () => {
    if (limit + PRODUCTS_CHUNK > 100) {
      setLimit(100); //the endopoint won't return more than 100
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
      {products.map((item: Product) => {
        return <ProductItem key={item.id} item={item} />
      })}
    </List>
    {limit < 100 && <LoadMoreContainer>
      <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
    </LoadMoreContainer>}
  </>
}

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: left; 
    margin: 20px auto 0 auto;
    max-width: 1200px;
    column-gap: 30px;
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