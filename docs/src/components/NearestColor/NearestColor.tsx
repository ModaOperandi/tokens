import React, { useState } from "react";
import styled from "styled-components";
import { color, spacing } from "@moda/tokens";
import { findNearestColorOrGrey } from "../../lib/findNearest";
import { Swatch } from "../Swatch/Swatch";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Swatches = styled.div``;

const Filter = styled.input`
  padding: ${spacing(1, 4)};
  border-radius: 1rem;
  border: 1px solid ${color("elephant")};
  margin-bottom: ${spacing(4)};

  &:focus {
    outline: none;
    border-color: ${color("elephant")};
  }
`;

type ColorDistance = { literal: string; distance: number };

export const NearestColor = () => {
  const [requested, setRequested] = useState<ColorDistance | null>(null);
  const [nearest, setNearest] = useState<ColorDistance | null>(null);

  const handleChange = ({
    currentTarget: { value },
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
