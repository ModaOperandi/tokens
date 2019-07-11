# moda-themes

## Meta

* **State**: development
* **Point people**: [@dzucconi](https://github.com/dzucconi)

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
@import 'moda-themes';

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
  font-family: font-family('sans');
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
const modaThemes = require('moda-themes');

module.exports = {
  "includePaths": [
    ...modaThemes.includePaths
  ]
}
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
@import 'moda-themes/all';

// See above...
```

## Releasing

[Increment the versions](https://semver.org/) in [package.json](package.json) and [lib/moda-themes/version.rb](lib/moda-themes/version.rb).

Run `rake release` to release the Ruby gem.

Run `yarn publish` to publish the NPM package.
