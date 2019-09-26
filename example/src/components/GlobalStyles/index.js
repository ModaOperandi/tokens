import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  :focus {
    outline: none;
  }

  body {
    margin: 3em;
    padding: 3em;
    font-size: 16px;
  }

  body,
  input {
    font-family: ${props => props.theme["font-families"].sans.join(",")};
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
  }

  h1,
  h2,
  h3 {
    text-align: center;
  }

  pre {
    margin: 1em auto;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
