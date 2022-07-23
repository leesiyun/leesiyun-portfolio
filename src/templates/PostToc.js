import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const PostToc = ({ toc }) => {
  return (
    <PostTocStyle>
      <ul>
        <div>Table Of Contents</div>
        {toc.items &&
          toc.items.map((item, index) => (
            <li key={index}>
              <Link to={`${item.url}`}>{item.title}</Link>
            </li>
          ))}
      </ul>
    </PostTocStyle>
  );
};

export default PostToc;

const PostTocStyle = styled.div`
  padding: 50px 0 50px 0;
  border-bottom: 1px solid #e6e6e6;
  color: #43413c;

  div {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 30px;
  }

  li {
    margin: 18px 0 0 15px;
    & :hover {
      color: #1755a9;
    }
  }
`;
