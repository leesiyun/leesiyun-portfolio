import React from "react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";

const P = styled.p`
  margin-bottom: 16px;
  color: #68686a;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 15px;
  }
`;

const H1 = styled.h1`
  margin-top: 100px;
  font-size: 30px;
  font-weight: 600;
`;

const H2 = styled.h2`
  margin: 40px 0 16px 0;
  font-size: 26px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const H3 = styled.h3`
  margin: 30px 0 16px 0;
  font-size: 21px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const A = styled.a`
  color: #1f70de;
  &:hover {
    color: #1755a9;
  }
`;

const Img = styled.img`
  margin: 30px 0;
  max-width: 100%;
`;

const PostContent = ({ postContent }) => {
  return (
    <MDXProvider
      components={{
        p: (props) => <P {...props} />,
        h1: (props) => <H1 {...props} />,
        h2: (props) => <H2 {...props} />,
        h3: (props) => <H3 {...props} />,
        a: (props) => <A {...props} target="_blank" rel="noreferrer" />,
        img: (props) => <Img {...props} />,
      }}
    >
      <MDXRenderer>{postContent}</MDXRenderer>
    </MDXProvider>
  );
};

export default PostContent;
