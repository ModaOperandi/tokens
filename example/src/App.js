import React from "react";
import styled, { ThemeProvider } from "styled-components";
import modaThemes from "moda-themes";

import { GlobalStyles } from "./components/GlobalStyles";
import { NearestColor } from "./components/NearestColor";
import { Palette } from "./components/Palette";
import { TypeTreatment } from "./components/TypeTreatment";

const { colors, themes } = modaThemes.data;

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
  }
};

const Section = styled.section``;

const Themed = styled.div`
  display: flex;
`;

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <>
        <GlobalStyles />

        <h1>moda-themes</h1>

        <Section>
          <h2>Type Treatments</h2>

          <TypeTreatment name="secondary-title">Editor’s Note</TypeTreatment>

          <TypeTreatment name="body-copy-sans">
            A classic of collegiate design, Thom Browne's rugby shirt has a
            collared neckline and thick stripes. Tailored in Japan from
            breathable cotton, it can be tucked into tailored pants or worn with
            jeans.
          </TypeTreatment>
        </Section>

        <Section>
          <NearestColor />
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
