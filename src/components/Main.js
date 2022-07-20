import React from "react";
import styled from "styled-components";

const Main = ({ children, setMobileMenuToggle }) => {
  const hiddenMobileMenuToggle = () => setMobileMenuToggle(false);
  return <MainStyle onClick={hiddenMobileMenuToggle}>{children}</MainStyle>;
};

export default Main;

const MainStyle = styled.main`
  width: 100%;
  height: 85vh;
  font-size: 16px;
  margin-top: 5.5vh;
  @media (max-width: 768px) {
    margin-top: 7vh;
  }
`;
