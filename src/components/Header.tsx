import styled from "styled-components";

const StyledHeader = styled.header`
  background: red;
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

export function Header() {
  return (
    <StyledHeader>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <TotalContainer>Total: $0</TotalContainer>
    </StyledHeader>
  );
}
