import styled from "styled-components";
import { ItemInterface } from "./ProductList";

const Item = styled.div`
    width: 200px;
    height: 250px; 
    margin: 10px;
    background-color: #f0f0f0; 
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px; 
`;

const Button = styled.button`
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 2px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    outline: none;

&:hover {
    background-color: #45a049;
}
`;

export function ProductItem({ item }: { item: ItemInterface }) {
    return <Item key={item.id}>
        <div>{item.content}</div>
        <Button>Buy</Button>
    </Item>;
}
