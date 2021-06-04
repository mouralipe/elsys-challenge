import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #fff;

    --primary: #022648;
    --secondary: #727e8c;
    --terciary: #00adef;

    --background: #f2f2f2;
    
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  @media (max-width: 360px) {
    html {
      font-size: 83%;
    }
  }

  @media (max-width: 340px) {
    html {
      font-size: 78%;
    }
  }

  body {
    background: var(--background);
    color: var(--secondary);
    
  }

  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;