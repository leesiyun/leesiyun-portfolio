import styled from "styled-components";

const PostTemplateStyle = styled.div`
  header {
    margin-top: 80px;
    background-color: #f6ab00;
    width: 100%;
    height: 10vh;
    min-height: 220px;
    display: flex;
    align-items: end;

    h1 {
      width: 100%;
      font-weight: 800;
      font-size: 42px;
      padding: 20px 14vw;
    }
  }

  main {
    color: #43413c;
    padding: 5vh 14vw;
    line-height: 2;

    span {
      color: #68686a;
    }

    h1,
    h2,
    h3,
    p,
    li {
      code {
        padding: 1.3px 5px;
        background-color: #f2f1f1;
        color: #eb5657;
        font-size: 14px;
        border-radius: 5px;
        word-break: break-all;
      }
    }
  }

  @media (max-width: 768px) {
    header {
      min-height: 200px;

      h1 {
        padding: 20px 5vw;
        font-size: 29px;
      }
    }
    main {
      padding: 40px 5vw 80px 5vw;
    }
  }
`;

const styledComponents = { PostTemplateStyle };

export default styledComponents;
