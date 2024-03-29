import React from "react";
import Layout from "../components/Layout";
import ScrollToTop from "../components/ScrollToTop";
import styledComponents from "../styles/CategoryPage.styled";
import { graphql, Link } from "gatsby";

const { CategoryPageStyle } = styledComponents;

const categories = ({
  data: {
    contentfulPost: { category },
    allContentfulPost: { nodes },
  },
}) => (
  <Layout pageTitle={category}>
    <ScrollToTop />
    <CategoryPageStyle>
      <header>
        <div>{category}</div>
      </header>
      <main>
        <ul>
          {nodes
            .filter((node) => node.category === category)
            .map((node, index) => (
              <li key={index}>
                <Link to={node.slug}>{node.title}</Link>
                <div>{node.description.description}</div>
              </li>
            ))}
        </ul>
      </main>
    </CategoryPageStyle>
  </Layout>
);

export default categories;

export const query = graphql`
  query ($id: String) {
    contentfulPost(id: { eq: $id }) {
      category
    }
    allContentfulPost(
      filter: { node_locale: { eq: "ko" } }
      sort: { fields: updatedAt, order: DESC }
    ) {
      nodes {
        id
        category
        slug
        title
        description {
          description
        }
      }
    }
  }
`;
