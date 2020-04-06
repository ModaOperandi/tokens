import React from "react";
import styled from "styled-components";
import { spacing, color, text } from "@moda/tokens";
import { Swatch } from "../Swatch/Swatch";

const Container = styled.div`
  margin: ${spacing(7, "auto")};
`;

const Colors = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 50%);
  background-color: ${color("noise")};
  padding: ${spacing(1)};
  border-radius: 0.25em;

  > * {
    flex-basis: 25%;
  }
`;

const H3 = styled.h3`
  ${text("body1", "code")}
  color: ${color("cement")};
  margin: ${spacing(4, 0)};
`;

interface Props {
  name: string;
  colors: [string, string][];
}

export const Palette: React.FC<Props> = ({ name, colors, ...rest }) => {
  return (
    <Container {...rest}>
      <H3>colors.{name}</H3>

      <Colors>
        {colors.map(([name, value]) => (
          <Swatch key={name} name={name} value={value} />
        ))}
      </Colors>
    </Container>
  );
};
