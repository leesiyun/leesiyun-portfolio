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

    a {
            text-decoration: none;
            color: black;
        }

    li {
            list-style: none;
        }
`;

export default GlobalStyles;
