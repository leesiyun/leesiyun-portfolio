import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as styles from "./Layout.module.css";
import Navbar from "./Navbar";
import "@fontsource/suez-one";
import "@fontsource/poppins";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <Navbar children={children} />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
