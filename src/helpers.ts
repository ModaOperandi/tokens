import colorString from 'color-string';
import { colors } from './colors';
import { space } from './space';
import { typography } from './typography';

export type Font = keyof typeof typography.fonts;
export type TextTreatment = keyof (typeof typography)['text-treatments'];
export type Color = keyof typeof colors.all;

export const text = (name: TextTreatment, font = 'sans' as Font) => {
  const treatment = typography['text-treatments'][name];
  return {
    ...treatment,
    'font-family': typography.fonts[font].join(','),
    'line-height': `${treatment['line-height']}`
  };
};

export const remToUnitlessPx = (value: string) =>
  parseFloat(value) * parseInt(typography['root-font-size'], 10);

export const color = (name: Color, alpha?: number) => {
  const color = colors.all[name];
  const [red, green, blue] = colorString.get.rgb(color) ?? [];

  return alpha != null ? colorString.to.rgb(red, green, blue, alpha) : color;
};

export const colorInHex = (name: Color, alpha?: number): string => {
  const [red, green, blue] = colorString.get.rgb(color(name, alpha) ?? '') ?? [];

  return colorString.to.hex(red, green, blue, alpha) ?? '';
};

export const spacing = (
  topY: number | string,
  rightX?: number | string,
  bottom?: number | string,
  left?: number | string
) =>
  [topY, rightX, bottom, left].reduce((acc, value) => {
    if (value === undefined) return acc;
    return [acc, space.scale[Number(value)] ?? value].join(' ');
  }, '');
