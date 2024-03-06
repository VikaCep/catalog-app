import styled from "styled-components";
import { Variant, useCart } from "../CartContext";
import { useMemo } from "react";

export function Header() {

  const { cartItems } = useCart();
  const total = useMemo(() => {
    return cartItems.reduce((acc: number, item: Variant) => {
      return acc + item.price;
    }, 0);
  }, [cartItems]);

  return (
    <StyledHeader>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <TotalContainer>Total: ${total}</TotalContainer>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: #d32f2f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const TotalContainer = styled.div`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
`;