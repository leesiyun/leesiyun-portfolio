import React from "react";
import Layout from "../components/Layout";

import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PostTemplate = ({ pageContext }) => {
  const post = pageContext;
  return <Layout>{renderRichText(post.content, options)} </Layout>;
};

export default PostTemplate;

const options = {};
