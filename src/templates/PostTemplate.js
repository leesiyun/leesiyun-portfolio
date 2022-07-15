import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import PostContent from "./PostContent";

const BackgroudColor = styled.div`
  margin-top: 80px;
  background-color: #f6ab00;
  width: 100%;
  height: 19vh;
  min-height: 190px;
`;

const PostTitle = styled.h1`
  font-size: 45px;
  font-weight: 800;
  padding: 60px 40px 45px 80px;
  @media (max-width: 768px) {
    font-size: 29px;
    padding: 50px 40px 45px 40px;
  }
`;

const PostMain = styled.div`
  padding: 5vh 14vw;
  margin-left: 10px;
  @media (max-width: 768px) {
    padding: 0 5vw;
  }
`;

const PostTemplate = ({ pageContext }) => {
  const post = pageContext;
  return (
    <Layout>
      <BackgroudColor>
        <PostTitle>{post.title}</PostTitle>
      </BackgroudColor>
      <PostMain>
        <PostContent postContent={post.content} />
      </PostMain>
    </Layout>
  );
};

export default PostTemplate;
