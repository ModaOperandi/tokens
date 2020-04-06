import React from "react";
import { Reset } from "styled-reset";
import styled from "styled-components";
import { colors, spacing, text } from "@moda/tokens";

import { GlobalStyles } from "./components/GlobalStyles";
import { NearestColor } from "./components/NearestColor";
import { Breakpoints } from "./components/Breakpoints";
import { Space } from "./components/Space";
import { Typography } from "./components/Typography";
import { Palette } from "./components/Palette";

const Section = styled.section`
  margin: ${spacing(8, "auto")};
`;

const H1 = styled.h1`
  ${text("h4")}
  margin: ${spacing(6, 0)};
  text-align: center;
`;

const H2 = styled.h2`
  ${text("h4", "serif")}
  margin: ${spacing(6, 0)};
  text-align: center;
`;

const P = styled.p`
  ${text("body1")}
  margin: ${spacing(6)};
  text-align: center;
`;

const Code = styled.code`
  ${text("body2", "code")}
`;

export const App: React.FC = () => (
  <>
    <Reset />

    <GlobalStyles />

    <H1>@moda/tokens</H1>

    <NearestColor />

    <Section>
      <H2 id="spacing">Spacing Scale</H2>

      <P>
        Utilize units from the scale over hardcoded-values to ensure a
        consistent rhythm.
      </P>

      <Space />
    </Section>

    <Section>
      <H2 id="typography">Typography</H2>

      <P>
        Utilize codified text treatments over composing individual properties.
        Specific font-sizes require specific line-heights and letter-spacings.
        Getters for individual properties (font-size, line-height, etc.) follow
        the naming convention <Code>__dangerously-get-property-name__</Code> to
        discourage their direct usage.
      </P>

      <Typography />
    </Section>

    <Section>
      <H2 id="colors">Colors</H2>

      <P>Utilize named color tokens instead of hexadecimal values.</P>

      {Object.entries(colors).map(([name, set]) => (
        <Palette key={name} name={name} colors={Object.entries(set)} />
      ))}
    </Section>

    <Section>
      <H2 id="breakpoints">Breakpoints</H2>

      <P>
        Utilize breakpoints mixin to ensure components break at the same places
        across apps.
      </P>

      <Breakpoints />
    </Section>
  </>
);
