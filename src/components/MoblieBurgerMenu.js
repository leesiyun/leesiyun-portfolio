import React from "react";
import styled from "styled-components";

const BugerMenu = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  display: none;
  padding: 2rem;
  @media (max-width: 768px) {
    position: absolute;
    display: block;
    right: 2rem;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    transition: all 0.5s ease-in-out;

    div {
      width: 2rem;
      height: 0.3rem;
      background: ${({ mobileMenuToggle }) =>
        mobileMenuToggle ? "transparent" : "black"};
      border-radius: 10px;
      box-shadow: 0 2px 5px raba(255, 101, 47, 0.2);
      transition: all 0.2s ease-in-out;
    }

    div::before,
    div::after {
      content: " ";
      position: absolute;
      right: 1rem;
      width: 2rem;
      height: 0.3rem;
      border-radius: 10px;
      background: black;
      box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
      transition: all 0.2s ease-in-out;
    }

    div::before {
      transform: ${({ mobileMenuToggle }) =>
        mobileMenuToggle
          ? "rotate(-45deg) translate(2px, 2px)"
          : "translateY(-10px)"};
    }

    div::after {
      transform: ${({ mobileMenuToggle }) =>
        mobileMenuToggle
          ? "rotate(45deg) translate(2px, -2px )"
          : "translateY(10px)"};
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
