import React from "react";
import styled from "styled-components";
import { colors, space } from "@moda/tokens";

import { GlobalStyles } from "./components/GlobalStyles";
import { NearestColor } from "./components/NearestColor";
import { Breakpoints } from "./components/Breakpoints";
import { SpaceScale } from "./components/SpaceScale";
import { Typography } from "./components/Typography";
import { Palette } from "./components/Palette";

const Section = styled.section`
  margin: ${space.scale[8]} auto;
`;

export const App: React.FC = () => (
  <>
    <GlobalStyles />

    <h1>@moda/tokens</h1>

    <NearestColor />

    <Section>
      <h2>Spacing Scale</h2>

      <SpaceScale />
    </Section>

    <Section>
      <h2>Typography</h2>

      <Typography />
    </Section>

    <Section>
      <h2>Colors</h2>

      {Object.entries(colors).map(([name, set]) => (
        <Palette key={name} name={name} colors={Object.entries(set)} />
      ))}
    </Section>

    <Section>
      <h2>Breakpoints</h2>

      <Breakpoints />
    </Section>
  </>
);
