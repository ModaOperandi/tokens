import React from "react";
import styled from "styled-components";
import { breakpoints, colors, space, typography } from "@moda/tokens";

import { Copy } from "../Copy";

const Container = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${colors.all.goldenrod};
  color: ${colors.all.canary};
  padding: ${space.scale[6]};

  &:after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 25%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.001),
      ${colors.all.goldenrod}
    );
  }
`;

const Breakpoint = styled.div<{ value: string }>`
  position: relative;
  font-size: ${typography["font-scale"][2]};
  padding: ${space.scale[3]} ${space.scale[4]};
  margin: ${space.scale[3]} 0;

  &:after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-top: 3px solid;
    width: ${({ value }) => value};
  }
`;

export const Breakpoints = () => {
  return (
    <Container>
      {Object.entries(breakpoints).map(([key, value]) => {
        return (
          <Copy key={value} copy={`@include breakpoint(${key});`}>
            <Breakpoint value={value}>
              {key.toUpperCase()} — @include breakpoint('{key}') = @media
              (min-width: {value}) {"{"} ... {"}"}
            </Breakpoint>
          </Copy>
        );
      })}
    </Container>
  );
};
