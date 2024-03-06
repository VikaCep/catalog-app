import styled from "styled-components";
import { Product } from "./ProductList";


const Item = styled.div`
  width: 200px;
  margin: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 150px; /* Set a fixed height for the image */
  object-fit: cover; /* Maintain aspect ratio and fill container */
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Content = styled.div`
  padding: 20px;
  flex-grow: 1; /* Allow content to grow to fill remaining space */
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 0 0 5px 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  &:hover {
    background-color: #45a049;
  }
`;


export function ProductItem({ item }: { item: Product }) {
    return <Item key={item.id}>
        <Image src={item.assets?.[0]?.source} alt={item.name} />
        <Content>
            <Name>{item.name}</Name>
            <Description>{item.description}</Description>
        </Content>
        <Button>Buy</Button>
    </Item>
}
