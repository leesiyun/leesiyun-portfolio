import React from "react";
import styled from "styled-components";

const BugerMenu = styled.button`
  border: none;
  background: none;
  display: none;
  @media (max-width: 768px) {
    position: absolute;
    display: block;
    right: 1.5vw;
    width: 50px;
    height: 50px;
    transition: all 0.5s ease-in-out;

    div {
      width: 30px;
      height: 4px;
      background: ${({ mobileMenuToggle }) =>
        mobileMenuToggle ? "transparent" : "black"};
      border-radius: 10px;
      transition: all 0.2s ease-in-out;
    }

    div::before,
    div::after {
      content: " ";
      position: absolute;
      right: 20px;
      width: 30px;
      height: 4px;
      border-radius: 10px;
      background: black;
      box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
      transition: all 0.2s ease-in-out;
    }

    div::before {
      transform: ${({ mobileMenuToggle }) =>
        mobileMenuToggle
          ? "rotate(-45deg) translate(2px, 2px)"
          : "translateY(-9px)"};
    }

    div::after {
      transform: ${({ mobileMenuToggle }) =>
        mobileMenuToggle
          ? "rotate(45deg) translate(2px, -2px )"
          : "translateY(9px)"};
    }
  }
`;

const MoblieBugerMenu = ({ mobileMenuToggle, showMobileMenuToggle }) => {
  return (
    <BugerMenu
      mobileMenuToggle={mobileMenuToggle}
      onClick={showMobileMenuToggle}
    >
      <div />
    </BugerMenu>
  );
};

export default MoblieBugerMenu;
