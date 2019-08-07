const path = require("path");

const colors = require("./data/colors");
const themes = require("./data/themes");
const typography = require("./data/typography");

module.exports = {
  includePaths: [path.join(__dirname, "lib/assets/stylesheets")],
  data: {
    colors,
    themes,
    typography
  }
};
