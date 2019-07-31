import React from "react";
import styled from "styled-components";
import chroma from "chroma-js";

import { getContrastYIQ } from "../../lib/getContrastYIQ";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: ${props => (props.isFullWidth ? "100%" : "25%")};
  font-size: 0.875rem;
  padding: 0.75em 1em 3em 1em;
  color: ${props => props.fg};
  background-color: ${props => props.bg};

  > span {
    flex-basis: 50%;

    &:nth-child(even) {
      text-align: right;
    }
  }

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Swatch = ({ name, value, literal = false, distance, ...rest }) => {
  if (literal) {
    const color = chroma(literal);
    const [r, g, b, a] = color.rgba();
    const hex = color.hex();
    const rgb = color.rgb();
    const fg = getContrastYIQ({ r, g, b, a });

    return (
      <Container bg={hex} fg={fg} {...rest}>
        <span title={`Distance: ${distance}`}>
          Input: {literal} (Distance: {distance.toFixed(2)})
        </span>
        <span>rgb({rgb.join(",")})</span>
        <span>text: {fg}</span>
        <span>{hex}</span>
      </Container>
    );
  }

  const color = chroma(value);
  const [r, g, b, a] = color.rgba();
  const hex = color.hex();
  const rgb = color.rgb();
  const fg = getContrastYIQ({ r, g, b, a });

  return (
    <Container bg={value} fg={fg} {...rest}>
      <span>{name}</span>
      <span>rgb({rgb.join(",")})</span>
      <span>text: {fg}</span>
      <span>{hex}</span>
    </Container>
  );
};
