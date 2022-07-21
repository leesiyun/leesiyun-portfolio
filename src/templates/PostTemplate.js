import React from "react";
import Layout from "../components/Layout";
import styledComponents from "../styles/PostTemplate.styled";
import PostContent from "./PostContent";
import PostToc from "./PostToc";

const { PostTemplateStyle } = styledComponents;

const PostTemplate = ({ pageContext }) => {
  const post = pageContext;
  return (
    <Layout pageTitle={post.category}>
      <PostTemplateStyle>
        <header>
          <h1>{post.title}</h1>
        </header>
        <main>
          <span>{post.description}</span>
          <PostToc toc={post.tableOfContents} />
          <PostContent postContent={post.content} />
        </main>
      </PostTemplateStyle>
    </Layout>
  );
};

export default PostTemplate;
