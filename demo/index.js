import chroma from "chroma-js";
import nearestColor from "nearest-color";

import themes from "./themes.json";
import colors from "./colors.json";

const renderSwatch = ({ name, value, literal = false, distance }) => {
  if (literal) {
    const color = chroma(literal);
    const [r, g, b, a] = color.rgba();
    const hex = color.hex();
    const rgb = color.rgb();
    const foregroundColor = getContrastYIQ({ r, g, b, a });

    return `
      <div class="Swatch" style="background-color: ${hex}; color: ${foregroundColor}">
        <span title="Distance: ${distance}">Input: ${literal} (Distance: ${distance.toFixed(
      2
    )})</span>
        <span>rgb(${rgb.join(",")})</span>
        <span>text: ${foregroundColor}</span>
        <span>${hex}</span>
      </div>
    `;
  }

  const color = chroma(value);
  const [r, g, b, a] = color.rgba();
  const hex = color.hex();
  const rgb = color.rgb();
  const foregroundColor = getContrastYIQ({ r, g, b, a });

  return `
    <div class="Swatch" style="background-color: ${hex}; color: ${foregroundColor};">
      <span>${name}</span>
      <span>rgb(${rgb.join(",")})</span>
      <span>text: ${foregroundColor}</span>
      <span>${hex}</span>
    </div>
`;
};

const renderPalette = ({ name, colors }) => `
  <div class="Palette">
    <h3>${name}</h3>
    <div class="Palette__colors" data-name="${name}">
      ${colors.map(renderSwatch).join("")}
      </div>
  </div>
`;

const themedPalettes = Object.keys(themes).map(themeName => ({
  name: themeName,
  colors: Object.keys(themes[themeName].colors).map(colorName => ({
    name: colorName,
    value: themes[themeName].colors[colorName]
  }))
}));

const globalPalettes = Object.keys(colors).map(setName => ({
  name: setName,
  colors: Object.keys(colors[setName]).map(colorName => ({
    name: colorName,
    value: colors[setName][colorName]
  }))
}));

document.getElementById("root").innerHTML = `
  <h2>Find Nearest Color</h2>

  <input id="js-find-color" placeholder="#HEXVAL" autofocus class="FindColor" />
  <div id="js-nearest-color"></div>

  <h2>Palettes</h2>
  <div class="Palettes">
    ${themedPalettes.map(renderPalette).join("")}
  </div>

  <hr />

  <h2>All Colors</h2>
  <div class="Colors">
    ${globalPalettes.map(renderPalette).join("")}
  </div>

  <hr />

  <h2>Theme</h2>
  <pre>${JSON.stringify(themes, null, 2)}</pre>
`;

const toHexObj = pairs =>
  pairs.reduce(
    (memo, [key, val]) => ({
      ...memo,
      [key]: chroma(val).hex()
    }),
    {}
  );

const greyChoices = toHexObj(Object.entries(colors.greyscale));
const colorChoices = toHexObj(Object.entries(colors.global));
const legacyChoices = toHexObj(Object.entries(colors.legacy));

const findNearestColor = nearestColor.from(colorChoices);
const findNearestGrey = nearestColor.from(greyChoices);
const findNearestLegacy = nearestColor.from(legacyChoices);
const findNearestColorOrGrey = input => {
  const color = chroma(input);
  const rgbChannels = color.rgb();
  const isGrey = rgbChannels.every(channel => channel === rgbChannels[0]);
  return isGrey ? findNearestGrey(input) : findNearestColor(input);
};

const nearestColorSwatch = document.getElementById("js-nearest-color");

const choose = findNearestColorOrGrey;

document.getElementById("js-find-color").addEventListener("input", e => {
  const input = e.currentTarget.value;

  try {
    const winner = choose(input);

    nearestColorSwatch.innerHTML = `
      <div class="Colors">
        ${renderSwatch({ literal: input, distance: winner.distance })}
        ${renderSwatch(winner)}
      </div>
    `;
  } catch {
    // ignore
  }
});
