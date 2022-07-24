import styled from "styled-components";

const CategoryPageStyle = styled.div`
  header {
    background-color: #f6ab00;
    width: 100%;
    height: 25vh;
    min-height: 200px;
    display: flex;
    align-items: center;
    div {
      margin-top: 80px;
      width: 100%;
      font-weight: 800;
      font-size: 60px;
      text-align: center;
    }
  }

  main {
    padding: 70px 10vw;
    margin-left: 10px;
    font-size: 22px;
    font-weight: 500;
    display: flex;
    li {
      margin-bottom: 13px;
      padding: 18px 3px 40px 3px;
      cursor: pointer;
      border-bottom: 1px solid #e6e6e6;
    }
    div {
      margin-top: 30px;
      color: #68686a;
      font-size: 14px;
      display: block;
    }
  }

  @media (max-width: 768px) {
    header {
      min-height: 160px;
      div {
        font-size: 40px;
      }
    }

    main {
      margin-left: 0px;
      padding: 4vh 5vw;
      font-size: 19px;
    }
  }
`;

const styledComponents = { CategoryPageStyle };

export default styledComponents;
