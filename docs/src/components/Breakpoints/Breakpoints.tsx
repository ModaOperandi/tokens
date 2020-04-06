import React from "react";
import styled from "styled-components";
import { breakpoints, colors, color, spacing, text } from "@moda/tokens";

import { Copy } from "../Copy";

const Container = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${color("goldenrod")};
  color: ${colors.all.canary};
  padding: ${spacing(6)};

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
      ${color("goldenrod")}
    );
  }
`;

const Breakpoint = styled.div<{ value: string }>`
  position: relative;
  padding: ${spacing(3, 4)};
  margin: ${spacing(3, 0)};
  ${text("h6")}

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
