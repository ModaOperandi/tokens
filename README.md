# @moda/tokens

[![CircleCI](https://img.shields.io/circleci/build/github/ModaOperandi/@moda/tokens?token=51b1595bd3dac6aa321b052adfc4595cc79910d6)](https://circleci.com/gh/ModaOperandi/@moda/tokens) [![npm](https://img.shields.io/npm/v/@moda/tokens)](https://www.npmjs.com/package/@moda/tokens) [![Gem](https://img.shields.io/gem/v/@moda/tokens)](https://rubygems.org/gems/@moda/tokens)

## Meta

- **State**: development
- **Point people**: [@dzucconi](https://github.com/dzucconi)

## Getting started

Install the package:

```sh
yarn add @moda/tokens --dev
```

Use the functions + mixins in your SASS/SCSS files:

```scss
@import "~@moda/tokens";

// Use functions to access values:
p {
  font-family: font-family("sans");
  // font-family: "Moda Operandi Sans", Arial, sans-serif;
}
```
