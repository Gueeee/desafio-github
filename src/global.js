import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, body {    
        padding: 0;
        margin: 0;
    }

    body {
        background-color: #22272e;
        color: #FFFFFF;
    }
`;

export default GlobalStyle;