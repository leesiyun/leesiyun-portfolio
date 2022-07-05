import React from "react";
import { Link } from "gatsby";
import styledComponents from "../styles/Navbar.styled";
import { urlData } from "../assets/urlData";
import MoblieBurgerMenu from "./MoblieBurgerMenu";

const { NavbarStyle, Logo, NavLinks } = styledComponents;

const Navbar = ({ mobileMenuToggle, showMobileMenuToggle }) => {
  return (
    <NavbarStyle>
      <Link to="/">
        <Logo>SIYUN</Logo>
      </Link>
      <NavLinks mobileMenuToggle={mobileMenuToggle}>
        {urlData.map((url) => {
          return (
            <li key={url.title}>
              <Link to={url.path} activeStyle={{ color: "#f6ab00" }}>
                {url.title}
              </Link>
            </li>
          );
        })}
      </NavLinks>
      <MoblieBurgerMenu
        mobileMenuToggle={mobileMenuToggle}
        showMobileMenuToggle={showMobileMenuToggle}
      />
    </NavbarStyle>
  );
};

export default Navbar;
