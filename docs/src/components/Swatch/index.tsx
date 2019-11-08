import React from "react";
import styled from "styled-components";
import chroma from "chroma-js";
import { space, typography } from "@moda/tokens";

import { getContrastYIQ } from "../../lib/getContrastYIQ";

const { scale: ss } = space;

const Container = styled.div<{ fg?: string; bg?: string }>`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 33.33%;
  font-size: ${typography["font-scale"][1]};
  padding: ${ss[3]} ${ss[4]} ${ss[7]} ${ss[4]};
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
      <Container bg={value} fg={fg} {...rest}>
        <span>{name}</span>
        <span>rgb({rgb.join(",")})</span>
        <span>text: {fg}</span>
        <span>{hex}</span>
      </Container>
    );
  }

  return null;
};
