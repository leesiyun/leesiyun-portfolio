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
`;
