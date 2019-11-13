import React, { useState } from "react";
import styled from "styled-components";
import { colors, space } from "@moda/tokens";

import { findNearestColorOrGrey } from "../../lib/findNearest";
import { Swatch } from "../Swatch/Swatch";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Swatches = styled.div`
  width: 25%;
`;

const Filter = styled.input`
  padding: ${space.scale[1]} ${space.scale[3]};
  border-radius: 1rem;
  border: 1px solid ${colors.all.cashmere};
  margin-bottom: ${space.scale[4]};

  &:focus {
    outline: none;
    border-color: ${colors.all.elephant};
  }
`;

type ColorDistance = { literal: string; distance: number };

export const NearestColor = () => {
  const [requested, setRequested] = useState<ColorDistance | null>(null);
  const [nearest, setNearest] = useState<ColorDistance | null>(null);

  const handleChange = ({
    currentTarget: { value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const winner = findNearestColorOrGrey(value);
      setRequested({ literal: value, distance: winner.distance });
      setNearest(winner);
      return;
    } catch {
      setRequested(null);
      setNearest(null);
      return;
    }
  };
  return (
    <Container>
      <Filter
        placeholder="Find nearest color"
        autoFocus
        onChange={handleChange}
      />

      <Swatches>
        {requested && <Swatch {...requested} />}
        {nearest && <Swatch {...nearest} />}
      </Swatches>
    </Container>
  );
};
