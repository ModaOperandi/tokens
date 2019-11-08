import chroma from "chroma-js";
import nearestColor from "nearest-color";
import { colors } from "@moda/tokens";

import { toHexObj } from "./toHexObj";

const greyChoices = toHexObj(Object.entries(colors.greyscale));
const colorChoices = toHexObj([
  ...Object.entries(colors.ui),
  ...Object.entries(colors.global),
  ...Object.entries(colors.mens),
  ...Object.entries(colors.womens)
]);

export const findNearestColor = nearestColor.from(colorChoices);
export const findNearestGrey = nearestColor.from(greyChoices);

export const findNearestColorOrGrey = (input: string) => {
  const color = chroma(input);
  const rgbChannels = color.rgb();
  const isGrey = rgbChannels.every(channel => channel === rgbChannels[0]);
  return isGrey ? findNearestGrey(input) : findNearestColor(input);
};
