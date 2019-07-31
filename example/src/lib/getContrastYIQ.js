export const getContrastYIQ = ({ r, g, b, a }) => {
  if (a === 0) return "black";
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
};
