import React from "react";
import styled from "styled-components";
import { space } from "@moda/tokens";

import { Swatch } from "../Swatch";

const Container = styled.div`
  margin: ${space.scale[7]} auto;
`;

const Colors = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface Props {
  name: string;
  colors: [string, string][];
}

export const Palette: React.FC<Props> = ({ name, colors, ...rest }) => {
  return (
    <Container {...rest}>
      <h3>{name}</h3>

      <Colors>
        {colors.map(([name, value]) => (
          <Swatch key={name} name={name} value={value} />
        ))}
      </Colors>
    </Container>
  );
};
