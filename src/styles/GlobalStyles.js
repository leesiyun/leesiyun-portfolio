import { createGlobalStyle, css } from "styled-components";
import normalize from "styled-normalize";
import "@fontsource/suez-one";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/nanum-gothic-coding";

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
          line-height: 1.285;
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
