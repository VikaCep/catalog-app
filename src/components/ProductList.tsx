import styled from "styled-components";
import { ProductItem } from "./ProductItem";
import { useQuery } from "@apollo/client";
import { PRODUCTS } from "../graphql/queries";
import { useMemo } from "react";

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

export function ProductList() {

  const { loading, error, data } = useQuery(PRODUCTS);

  const products = useMemo(() => data?.products?.items ?? [], [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return <List>
    {products.map((item: Product) => <ProductItem item={item} />)}
  </List>
}
