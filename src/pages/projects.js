import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { graphql, Link } from "gatsby";

const BackgroudColor = styled.div`
  margin-top: 80px;
  background-color: #f6ab00;
  width: 100%;
  height: 20vh;
  min-height: 190px;
  div {
    padding: 95px 40px 30px 80px;
    font-weight: 800;
    font-size: 60px;
    text-align: center;
    @media (max-width: 768px) {
      padding: 90px 40px 45px 40px;
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

const ProjectsPage = ({
  data: {
    allContentfulPost: { nodes },
  },
}) => {
  return (
    <Layout pageTitle="Projects">
      <BackgroudColor>
        <div>Projects</div>
      </BackgroudColor>
      <Main>
        <ul>
          {nodes
            .filter((node) => node.category === "projects")
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

export default ProjectsPage;

export const query = graphql`
  query {
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
