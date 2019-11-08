import chroma from "chroma-js";

export const toHexObj = (pairs: [string, string][]) =>
  pairs.reduce(
    (memo, [key, val]) => ({
      ...memo,
      [key]: chroma(val).hex()
    }),
    {}
  );
