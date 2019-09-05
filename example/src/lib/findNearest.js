import chroma from 'chroma-js';
import nearestColor from 'nearest-color';
import { colors } from 'moda-themes';

import { toHexObj } from './toHexObj';

const greyChoices = toHexObj(Object.entries(colors.greyscale));
const colorChoices = toHexObj(Object.entries(colors.global));
const legacyChoices = toHexObj(Object.entries(colors.legacy));

export const findNearestColor = nearestColor.from(colorChoices);

export const findNearestGrey = nearestColor.from(greyChoices);

export const findNearestLegacy = nearestColor.from(legacyChoices);

export const findNearestColorOrGrey = input => {
  const color = chroma(input);
  const rgbChannels = color.rgb();
  const isGrey = rgbChannels.every(channel => channel === rgbChannels[0]);
  return isGrey ? findNearestGrey(input) : findNearestColor(input);
};
