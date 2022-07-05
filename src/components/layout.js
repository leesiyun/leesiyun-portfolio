import * as React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Title from "./Title";
import Navbar from "./Navbar";
import Main from "./Main";
import "@fontsource/suez-one";
import "@fontsource/poppins";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <GlobalStyles />
      <Title pageTitle={pageTitle} />
      <Navbar />
      <Main children={children} />
    </>
  );
};

export default Layout;
