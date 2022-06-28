import React, { useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as SoildIcons from "@fortawesome/free-solid-svg-icons";
import * as styles from "./Navbar.module.css";

const Navbar = () => {
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <h3 className={styles.logo}>SIYUN</h3>
      </Link>
      <ul
        className={mobileMenuToggle ? styles.navLinksToggle : styles.navLinks}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/learn">Learn</Link>
        </li>
        <li>
          <Link to="/carrer">Carrer</Link>
        </li>
      </ul>
      <button
        className={styles.mobileMenuIcon}
        onClick={() => setMobileMenuToggle((currentValue) => !currentValue)}
      >
        {mobileMenuToggle ? (
          <FontAwesomeIcon icon={SoildIcons.faXmark} />
        ) : (
          <FontAwesomeIcon icon={SoildIcons.faBars} />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
