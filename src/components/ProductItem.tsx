import styled from "styled-components";
import { Product, Variant, useCart } from "../CartContext";
import VariantSelector from "./VariantSelector";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ITEM_TO_ORDER } from "../graphql/mutations";

export function ProductItem({ item }: { item: Product }) {

  const [addToOrder, { loading, error }] = useMutation(ADD_ITEM_TO_ORDER)
  const [selectedVariant, setSelectedVariant] = useState(item.variants[0]);
  const [showTooltip, setShowTooltip] = useState(false);

  const { updateTotal } = useCart();

  const handleBuy = async () => {
    await addToOrder({ variables: { productVariantId: selectedVariant.id, quantity: 1 } });
    if (error) {
      return;
    }
    //keep track of the total amount in the cart using CartContext
    updateTotal(selectedVariant.price);
  }

  return <Item key={item.id} data-testid='product-item'>
    <Image src={item.assets?.[0]?.source} alt={item.name} />
    <Content>
      <Name>{item.name}</Name>
      <VariantSelector item={item} onVariantSelected={(variant: Variant) => setSelectedVariant(variant)} />
      <TooltipContainer
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <Description>{item.description}</Description>
        {showTooltip && <Tooltip>{item.description}</Tooltip>}
      </TooltipContainer>
    </Content>
    {!loading && <Button onClick={() => handleBuy()}>Buy</Button>}
    {loading && <Button disabled={true} onClick={() => handleBuy()}>Adding to cart...</Button>}
  </Item>
}

const Item = styled.div`
  width: 250px;
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
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  cursor: pointer;
`;

const TooltipContainer = styled.div`
  position: relative;
`;

const Tooltip = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 12px;
  border-radius: 5px;
  visibility: visible;
  opacity: 1;
  transition: visibility 0.3s, opacity 0.3s;
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