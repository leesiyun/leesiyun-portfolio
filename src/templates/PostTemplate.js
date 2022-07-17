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
  padding: 60px 40px 45px 80px;
  font-weight: 800;
  font-size: 45px;
  @media (max-width: 768px) {
    padding: 50px 40px 45px 40px;
    font-size: 29px;
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
