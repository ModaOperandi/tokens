import React from "react";
import styled, { ThemeProvider } from "styled-components";
import modaThemes from "moda-themes";

import { GlobalStyles } from "./components/GlobalStyles";
import { NearestColor } from "./components/NearestColor";
import { Palette } from "./components/Palette";
import { Scale } from "./components/Scale";
import { ZIndexes } from "./components/ZIndexes";

const { colors, themes, space } = modaThemes.data;

const PALETTES = {
  themed: Object.keys(themes).map(themeName => ({
    name: themeName,
    colors: Object.keys(themes[themeName].colors).map(colorName => ({
      name: colorName,
      value: themes[themeName].colors[colorName]
    }))
  })),

  global: Object.keys(colors).map(setName => ({
    name: setName,
    colors: Object.keys(colors[setName]).map(colorName => ({
      name: colorName,
      value: colors[setName][colorName]
    }))
  }))
};

const THEME = {
  ...themes.global,
  colors: {
    ...colors.global,
    ...colors.greyscale
  },
  scale: space.scale
};

const Section = styled.section`
  margin: 5em auto;
`;

const Themed = styled.div`
  display: flex;
`;

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <>
        <GlobalStyles />

        <h1>moda-themes</h1>

        <NearestColor />

        <Section>
          <h2>Spacing Scale</h2>
          <Scale />
        </Section>

        <Section>
          <h2>Z-Indexes</h2>
          <ZIndexes />
        </Section>

        <Section>
          <h2>Theme Palettes</h2>
          <Themed>
            {PALETTES.themed.map(palette => (
              <Palette key={palette.name} isThemed={true} {...palette} />
            ))}
          </Themed>
        </Section>

        <Section>
          <h2>All Color Palettes</h2>
          {PALETTES.global.map(palette => (
            <Palette key={palette.name} {...palette} />
          ))}
        </Section>
      </>
    </ThemeProvider>
  );
}

export default App;
