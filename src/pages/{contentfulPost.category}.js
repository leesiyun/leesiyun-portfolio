import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { graphql, Link } from "gatsby";

const Header = styled.header`
  margin-top: 80px;
  background-color: #f6ab00;
  width: 100%;
  height: 10vh;
  min-height: 220px;
  display: flex;
  align-items: center;
  div {
    width: 100%;
    font-weight: 800;
    font-size: 60px;
    text-align: center;
  }
  @media (max-width: 768px) {
    min-height: 200px;
    div {
      font-size: 40px;
    }
  }
`;

const Main = styled.div`
  padding: 70px 10vw;
  margin-left: 10px;
  font-size: 23px;
  font-weight: 500;
  li {
    margin-bottom: 13px;
    display: flex;
    padding: 10px 3px 40px 3px;
    cursor: pointer;
    border-bottom: 1px solid #e6e6e6;
  }
  div {
    margin-right: 15px;
  }
  @media (max-width: 768px) {
    padding: 4vh 5vw;
    font-size: 19px;
  }
`;

const categories = ({
  data: {
    contentfulPost: { category },
    allContentfulPost: { nodes },
  },
}) => {
  return (
    <Layout pageTitle={category}>
      <Header>
        <div>{category}</div>
      </Header>
      <Main>
        <ul>
          {nodes
            .filter((node) => node.category === category)
            .map((node, index) => (
              <li key={index}>
                <Link to={node.slug}>{node.title}</Link>
                {/* <div>{node.date}</div> */}
              </li>
            ))}
        </ul>
      </Main>
    </Layout>
  );
};

export default categories;

export const query = graphql`
  query ($id: String) {
    contentfulPost(id: { eq: $id }) {
      category
    }
    allContentfulPost(filter: { node_locale: { eq: "ko" } }) {
      nodes {
        id
        category
        slug
        title
        date
      }
    }
  }
`;
