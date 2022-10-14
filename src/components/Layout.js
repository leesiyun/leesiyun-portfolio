import React, { useState } from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Title from "./Title";
import Navbar from "./Navbar";
import Main from "./Main";

const Layout = ({ pageTitle, children }) => {
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
  const showMobileMenuToggle = () => setMobileMenuToggle((current) => !current);
  return (
    <>
      <GlobalStyles />
      <Title pageTitle={pageTitle} />
      <Navbar
        pageTitle={pageTitle}
        mobileMenuToggle={mobileMenuToggle}
        showMobileMenuToggle={showMobileMenuToggle}
      />
      <Main children={children} setMobileMenuToggle={setMobileMenuToggle} />
    </>
  );
};

export default Layout;
