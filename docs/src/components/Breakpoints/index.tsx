import React from "react";
import styled from "styled-components";
import { breakpoints, colors, space, typography } from "@moda/tokens";

const Container = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${colors.all["goldenrod"]};
  color: ${colors.all["canary"]};
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
      ${colors.all["goldenrod"]}
    );
  }

  &:hover {
    margin-right: -100%;
  }
`;

const Breakpoint = styled.div<{ value: string }>`
  border-top: 3px solid;
  width: ${({ value }) => value};
  font-size: ${typography["font-scale"][2]};
  padding: ${space.scale[2]} 0 ${space.scale[4]} 0;
  margin-bottom: ${space.scale[7]};

  &:last-child {
    padding-bottom: 0;
    margin-bottom: ${space.scale[5]};
  }
`;

export const Breakpoints = () => {
  return (
    <Container>
      {Object.entries(breakpoints).map(([key, value]) => {
        return (
          <Breakpoint value={value}>
            {key.toUpperCase()} — @include breakpoint('{key}') = @media
            (min-width: {value}) {"{"} ... {"}"}
          </Breakpoint>
        );
      })}
    </Container>
  );
};
