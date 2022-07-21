import React from "react";
import styled from "styled-components";

const PostToc = ({ toc }) => {
  return (
    <aside>
      <TocElement toc={toc} />
    </aside>
  );
};

const TocElement = ({ toc }) => {
  return (
    <TocElementStyle>
      <ul>
        <div>Table Of Contents</div>
        {toc.items &&
          toc.items.map((item, index) => (
            <li key={index}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
      </ul>
    </TocElementStyle>
  );
};

export default PostToc;

const TocElementStyle = styled.div`
  padding: 40px 0 50px 0;
  border-bottom: 1px solid #e6e6e6;

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
