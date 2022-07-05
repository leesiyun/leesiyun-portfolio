import React from "react";
import styled from "styled-components";

const MainStyle = styled.main`
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  width: 100%;
  height: 92vh;
  padding-top: 100px;
`;

const Main = ({ children }) => {
  return <MainStyle>{children}</MainStyle>;
};

export default Main;
