import chroma from "chroma-js";

export const toHexObj = pairs =>
  pairs.reduce(
    (memo, [key, val]) => ({
      ...memo,
      [key]: chroma(val).hex()
    }),
    {}
  );
