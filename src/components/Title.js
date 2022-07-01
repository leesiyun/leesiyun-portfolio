import * as React from "react";
import { StaticQuery, graphql } from "gatsby";

const Title = ({ pageTitle, data }) => (
  <title>
    {pageTitle} | {data.site.siteMetadata.title}
  </title>
);

export default function MyTitle(props) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => <Title data={data} {...props} />}
    />
  );
}
