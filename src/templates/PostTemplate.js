import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import PostContent from "./PostContent";

const Header = styled.header`
  margin-top: 80px;
  background-color: #f6ab00;
  width: 100%;
  height: 10vh;
  min-height: 220px;
  display: flex;
  align-items: end;
  @media (max-width: 768px) {
    min-height: 200px;
  }
`;

const PostTitle = styled.h1`
  width: 100%;
  font-weight: 800;
  font-size: 42px;
  padding: 20px 14vw;
  @media (max-width: 768px) {
    padding: 20px 5vw;
    font-size: 29px;
  }
`;

const Main = styled.div`
  padding: 5vh 14vw;
  @media (max-width: 768px) {
    padding: 0 5vw 80px 5vw;
  }
`;

const PostTemplate = ({ pageContext }) => {
  const post = pageContext;
  return (
    <Layout pageTitle={post.category}>
      <Header>
        <PostTitle>{post.title}</PostTitle>
      </Header>
      <Main>
        <PostContent postContent={post.content} />
      </Main>
    </Layout>
  );
};

export default PostTemplate;
