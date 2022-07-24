import { createGlobalStyle, css } from "styled-components";
import normalize from "styled-normalize";

const GlobalStyles = createGlobalStyle`
    ${normalize};
    ${() => {
      return css`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        html {
          scroll-padding-top: 83px;
        }

        html,
        body {
          font-size: 62.5%;
          width: 100%;
          line-height: 2;
          font-family: "Poppins", sans-serif;
        }

        a {
          text-decoration: none;
          color: black;
        }

        li {
          list-style: none;
        }
      `;
    }}


`;

export default GlobalStyles;
