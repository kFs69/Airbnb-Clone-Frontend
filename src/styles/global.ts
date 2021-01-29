import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  
  body {
    background: transparent;
    color: #484848;
    -webkit-font-smooth: antialiased;
  }

  body, input, button {
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
    font-size: 15px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  
  button {
    cursor: pointer;
  }
`;