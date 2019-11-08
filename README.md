# @moda/tokens

[![CircleCI](https://img.shields.io/circleci/build/github/ModaOperandi/tokens)](https://circleci.com/gh/ModaOperandi/tokens) [![npm](https://img.shields.io/npm/v/@moda/tokens)](https://www.npmjs.com/package/@moda/tokens)

## Meta

- **State**: development
- **Point people**: [@dzucconi](https://github.com/dzucconi), [@SamJacobs](https://github.com/SamJacobs)

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
