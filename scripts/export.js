const sass = require("node-sass");
const exportSass = require("node-sass-export");
const path = require("path");

const modaThemes = require("../");

sass.renderSync({
  file: path.join(__dirname, "./export.scss"),
  includePaths: [...modaThemes.includePaths],
  functions: exportSass(".")
});
