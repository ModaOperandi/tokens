export const getContrastYIQ = ({
  r,
  g,
  b,
  a
}: {
  r: number;
  g: number;
  b: number;
  a: number;
}) => {
  if (a === 0) return "black";
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
};
