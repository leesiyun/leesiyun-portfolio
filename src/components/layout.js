import * as React from "react";
import * as styles from "./Layout.module.css";
import Navbar from "./Navbar";
import Title from "./Title";
import "@fontsource/suez-one";
import "@fontsource/poppins";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Title pageTitle={pageTitle} />
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
