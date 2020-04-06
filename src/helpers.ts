import { colors } from "./colors";
import { space } from "./space";
import { typography } from "./typography";

export type Font = keyof typeof typography.fonts;
export type TextTreatment = keyof typeof typography["text-treatments"];
export type Color = keyof typeof colors.all;

export const text = (name: TextTreatment, font = "sans" as Font) => {
  const treatment = typography["text-treatments"][name];
  return {
    ...treatment,
    "font-family": typography.fonts[font].join(","),
    "line-height": `${treatment["line-height"]}`,
  };
};

export const remToUnitlessPx = (value: string) =>
  parseFloat(value) * parseInt(typography["root-font-size"], 0);

export const color = (name: Color) => colors.all[name];

export const spacing = (
  ty: number | string,
  rx?: number | string,
  b?: number | string,
  l?: number | string
) =>
  [ty, rx, b, l].reduce((acc, v) => {
    if (v === undefined) return acc;
    return [acc, space.scale[v] ?? v].join(" ");
  }, "");
