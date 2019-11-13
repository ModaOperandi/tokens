import { typography, space } from "@moda/tokens";
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

  body {
    margin: ${space.scale[7]};
    padding: ${space.scale[7]};
    font-size: ${typography["root-font-size"]};
  }

  body,
  input {
    font-family: ${typography.fonts.sans.join(",")};
    -webkit-font-smoothing: antialiased;
    font-size: ${typography["font-scale"][2]};
  }

  h1,
  h2,
  h3 {
    text-align: center;
  }

  pre {
    margin: ${space.scale[6]} auto;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
