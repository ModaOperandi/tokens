# moda-themes

[![CircleCI](https://img.shields.io/circleci/build/github/ModaOperandi/moda-themes?token=51b1595bd3dac6aa321b052adfc4595cc79910d6)](https://circleci.com/gh/ModaOperandi/moda-themes) [![npm](https://img.shields.io/npm/v/moda-themes)](https://www.npmjs.com/package/moda-themes)

## Meta

- **State**: production
- **Point people**: [@dzucconi](https://github.com/dzucconi)

## Getting started

### Ruby

Include the Ruby gem:

```ruby
gem 'moda-themes'
```

```sh
bundle install
```

Use the functions + mixins in your SASS/SCSS files:

```scss
@import "moda-themes";

// Include this once to generate the `data-theme` attr styling. This is not auto-included
// to prevent duplicate imports.
@include data-themes; /* Outputs =>
[data-theme=legacy] {
  --theme-font-families-title: Miller Headline, Georgia, Times New Roman, Times, serif;
  --theme-font-families-sans: Gotham, Helvetica Neue, Helvetica, Arial, sans-serif;
  --theme-font-families-serif: Miller Headline, Georgia, Times New Roman, Times, serif;
  --theme-font-families-body: Miller Headline, Georgia, Times New Roman, Times, serif;
  // ...
}
[data-theme=global] {
  --theme-font-families-title: Moda Operandi Serif, Times New Roman, Times, serif;
  --theme-font-families-sans: Moda Operandi Sans, Arial, sans-serif;
  --theme-font-families-serif: Moda Operandi Serif, Times New Roman, Times, serif;
  --theme-font-families-body: Caslon, Times New Roman, Times, serif;
  // ...
}
*/

// Use the functions to access themed values:
p {
  font-family: font-family("sans");
  // font-family: var(--theme-font-families-sans);
}
```

### JavaScript

Install the package:

```sh
yarn add moda-themes
```

Configure node-sass `includePaths`:

For Parcel: Create a .sassrc.js:

```javascript
const modaThemes = require("moda-themes");

module.exports = {
  includePaths: [...modaThemes.includePaths]
};
```

For Webpack: Configure sass-loader:

```javascript
const modaThemes = require("moda-themes");

const config = {
  // ...
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: { includePaths: [...modaThemes.includePaths] }
          }
        ]
      }
    ]
  }
};

module.exports = config;
```

Use the functions + mixins in your SASS/SCSS files:

```scss
@import "moda-themes/all";

// ...
```

## Usage

See [USAGE](USAGE.md).

## Transitioning

See [REBRAND](REBRAND.md).

## API

### Functions

#### `color($name)`

Returns a color variable.

#### `font-family($name)`

Returns a font-family variable.

#### `font-size($name)`

Returns a font-size variable.

#### `line-height($name)`

Returns a line-height variable.

#### `letter-spacing($name)`

Returns a letter-spacing variable.

#### `get-from-theme($theme-name, $keys...)`

Undocumented.

#### `themed-value-exists($category, $key)`

Undocumented.

### Mixins

#### `set-root-theme($theme-name)`

Sets theme variables at the `:root` (include this once)

#### `data-themes()`

Inlcudes the full set of themes under `[data-theme="name"]` selectors. (include this once)

#### `theme-variables-for($theme)`

Allows you to pull in a set of themed variables manually.

#### `global-styles()`

Pulls in any global styles.

## Releasing

[Increment the versions](https://semver.org/) in [package.json](package.json) and [lib/moda-themes/version.rb](lib/moda-themes/version.rb).

Run `yarn build` to rebuild the exported data.

Run `rake release` to release the Ruby gem.

Run `yarn publish` to publish the NPM package.
