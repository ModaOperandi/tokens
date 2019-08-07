import React from "react";
import styled from "styled-components";
import modaThemes from "moda-themes";
import camelcaseKeys from "camelcase-keys";

const { typography } = modaThemes.data;

const Container = styled.div`
  margin: 2em auto;
  width: 25em;

  > hr {
    height: 1px;
    background-color: ${props => props.theme.colors.cashmere};
    border: 0;
    width: 10em;
    margin: 1em 0;
  }
`;

const Treatment = styled.div`
  border: 1px dotted ${props => props.theme.colors.cashmere};
`;

export const TypeTreatment = ({ name = "body-copy-sans", children }) => {
  const style = typography["type-treatments"][name];
  const treatment = camelcaseKeys(style);

  return (
    <Container>
      <pre>{name}</pre>
      <pre>{JSON.stringify(style, null, 2)}</pre>

      <hr />

      <Treatment style={treatment}>{children}</Treatment>
    </Container>
  );
};
