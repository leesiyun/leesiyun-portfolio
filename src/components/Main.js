import React from "react";
import styled from "styled-components";

const MainStyle = styled.main`
  text-align: center;
  width: 100%;
  height: 92vh;
`;

const Main = ({ children, setMobileMenuToggle }) => {
  const hiddenMobileMenuToggle = () => setMobileMenuToggle(false);
  return <MainStyle onClick={hiddenMobileMenuToggle}>{children}</MainStyle>;
};

export default Main;
