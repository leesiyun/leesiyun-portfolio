import React, { useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as SoildIcons from "@fortawesome/free-solid-svg-icons";
import styledComponents from "../styles/Navbar.styled";
import { urlData } from "../assets/urlData";

const { NavbarStyle, Logo, NavLinks, MoblieMenuIcon } = styledComponents;

const Navbar = () => {
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
  return (
    <NavbarStyle>
      <Link to="/">
        <Logo>SIYUN</Logo>
      </Link>
      <NavLinks mobileMenuToggle={mobileMenuToggle}>
        {urlData.map((url) => {
          return (
            <li key={url.title}>
              <Link to={url.path}>{url.title}</Link>
            </li>
          );
        })}
      </NavLinks>
      <MoblieMenuIcon
        onClick={() => setMobileMenuToggle((currentValue) => !currentValue)}
      >
        {mobileMenuToggle ? (
          <FontAwesomeIcon icon={SoildIcons.faXmark} />
        ) : (
          <FontAwesomeIcon icon={SoildIcons.faBars} />
        )}
      </MoblieMenuIcon>
    </NavbarStyle>
  );
};

export default Navbar;
