import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-style: normal;
  font-weight: normal;
  font-family: 'GmarketSansMedium';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
}

  * {
  box-sizing: border-box;
  font-family: "GmarketSansMedium", sans-serif;
  }

  body {
    background-color: #40089a;
  }
`;

export default GlobalStyle;
