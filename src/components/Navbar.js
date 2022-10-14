import React from "react";
import { Link } from "gatsby";
import styledComponents from "../styles/Navbar.styled";
import { urlData } from "../assets/urlData";
import MoblieBurgerMenu from "./MoblieBurgerMenu";

const { NavbarStyle } = styledComponents;

const Navbar = ({ pageTitle, mobileMenuToggle, showMobileMenuToggle }) => (
  <NavbarStyle pageTitle={pageTitle} mobileMenuToggle={mobileMenuToggle}>
    <Link to="/">
      <h3>SIYUN</h3>
    </Link>
    <ul>
      {urlData.map((url, index) => {
        return (
          <li key={index}>
            <Link to={url.path}>{url.title}</Link>
          </li>
        );
      })}
    </ul>
    <MoblieBurgerMenu
      mobileMenuToggle={mobileMenuToggle}
      showMobileMenuToggle={showMobileMenuToggle}
    />
  </NavbarStyle>
);

export default Navbar;
