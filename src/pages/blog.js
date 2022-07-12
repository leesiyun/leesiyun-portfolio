import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      <ul>
        {data.allContentfulPost.nodes.map((post) => (
          <li key={post.id}>
            <a href={post.slug}>{post.title}</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query {
    allContentfulPost(filter: { node_locale: { eq: "ko" } }) {
      nodes {
        id
        slug
        title
      }
    }
  }
`;
