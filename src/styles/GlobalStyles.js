import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const GlobalStyles = createGlobalStyle`
    ${normalize};

    * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
        }

    html,
    body {
                font-size: 62.5%;
                line-height: 1.285;
                width: 100%;
                height: 100%;
            }

    a {
            text-decoration: none;
            color: black;
        }

    li {
            list-style: none;
        }

`;

export default GlobalStyles;
