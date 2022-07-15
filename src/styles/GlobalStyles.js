import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const GlobalStyles = createGlobalStyle`
    ${normalize};

    * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            
        }

    html,
    body {
                font-size: 62.5%;
                line-height: 1.285;
                width: 100%;
                height: 100%;
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

export default GlobalStyles;
