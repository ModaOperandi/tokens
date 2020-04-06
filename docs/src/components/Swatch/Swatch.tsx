import React from "react";
import styled from "styled-components";
import chroma from "chroma-js";
import { spacing, text } from "@moda/tokens";

import { Copy } from "../Copy";
import { getContrastYIQ } from "../../lib/getContrastYIQ";

const Container = styled.div<{ fg?: string; bg?: string }>`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: ${spacing(4)};
  color: ${({ fg }) => fg};
  background-color: ${({ bg }) => bg};
  ${text("body1")};

  > span {
    flex-basis: 50%;

    &:nth-child(even) {
      text-align: right;
    }
  }
`;

interface Props {
  name?: string;
  value?: string;
  literal?: string;
  distance?: number;
}

export const Swatch: React.FC<Props> = ({
  name,
  value,
  literal,
  distance,
  ...rest
}) => {
  if (literal && distance) {
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

  if (name && value) {
    const color = chroma(value);
    const [r, g, b, a] = color.rgba();
    const hex = color.hex();
    const rgb = color.rgb();
    const fg = getContrastYIQ({ r, g, b, a });

    return (
      <Copy copy={`color(${name})`}>
        <Container bg={value} fg={fg} {...rest}>
          <span>{name}</span>
          <span>rgb({rgb.join(",")})</span>
          <span>text: {fg}</span>
          <span>{hex}</span>
        </Container>
      </Copy>
    );
  }

  return null;
};
