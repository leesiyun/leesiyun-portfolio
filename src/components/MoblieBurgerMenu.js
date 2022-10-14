import React from "react";
import styledComponents from "../styles/BugerMenu.styled";

const { BugerMenuStyle } = styledComponents;

const MoblieBugerMenu = ({ mobileMenuToggle, showMobileMenuToggle }) => (
  <BugerMenuStyle
    mobileMenuToggle={mobileMenuToggle}
    onClick={showMobileMenuToggle}
  >
    <div />
  </BugerMenuStyle>
);

export default MoblieBugerMenu;
