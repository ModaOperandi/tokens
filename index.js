const path = require("path");

const colors = require("./data/colors");
const themes = require("./data/themes");
const typography = require("./data/typography");
const space = require("./data/space");
const breakpoints = require("./data/breakpoints");

module.exports = {
  includePaths: [path.join(__dirname, "lib/assets/stylesheets")],
  data: {
    colors,
    themes,
    typography,
    space,
    breakpoints,
  }
};
