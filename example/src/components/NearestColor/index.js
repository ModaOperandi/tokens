import React, { useState } from "react";
import styled from "styled-components";

import { findNearestColorOrGrey } from "../../lib/findNearest";
import { Swatch } from "../Swatch";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Filter = styled.input`
  padding: 0.25em 0.75em;
  border-radius: 1rem;
  border: 1px solid ${props => props.theme.colors.cashmere};
  margin-bottom: 1em;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.elelphant};
  }
`;

export const NearestColor = () => {
  const initialState = null;

  const [requested, setRequested] = useState(initialState);
  const [nearest, setNearest] = useState(initialState);

  const handleChange = ({ currentTarget: { value } }) => {
    try {
      const winner = findNearestColorOrGrey(value);
      setRequested({ literal: value, distance: winner.distance });
      setNearest(winner);
      return;
    } catch {
      setRequested(initialState);
      setNearest(initialState);
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

      {requested && <Swatch {...requested} />}

      {nearest && <Swatch {...nearest} />}
    </Container>
  );
};
