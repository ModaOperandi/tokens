const sass = require("node-sass");
const exportSass = require("node-sass-export");
const modaThemes = require("moda-themes");

sass.renderSync({
  file: "./index.scss",
  includePaths: [...modaThemes.includePaths],
  functions: exportSass(".")
});
