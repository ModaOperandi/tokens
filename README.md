# @moda/tokens

[![CircleCI](https://img.shields.io/circleci/build/github/ModaOperandi/tokens)](https://circleci.com/gh/ModaOperandi/tokens) [![npm](https://img.shields.io/npm/v/@moda/tokens)](https://www.npmjs.com/package/@moda/tokens)

Been here before? Visit the [click-to-copy](https://moda-tokens.netlify.com/) documentation. First time? Keep reading.

## What is this?

Tokens are the lowest level of the design system. They are individual named values that, when composed, form our styles; names of colors, values for spacing, etc. We use them to ensure consistency across all of our UI. For more information about this concept, broadly see: [Tokens in Design Systems](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421) and [What Are Design Tokens?](https://css-tricks.com/what-are-design-tokens/).

This library encapsulates these values and provides some interfaces for utilizing them within your stylesheets or JavaScript.

## What this is not

This is not a library of React components or a library of icons. It is not "The Design System", only a single piece of it — the lowest-level piece.

## Meta

- **State**: development
- **Point people**: <del>[@dzucconi](https://github.com/dzucconi)</del> You?

## Architecture

The source of truth for these values begins in SASS variables. Moda uses SASS (specifically SCSS) across all of its front-end projects and it's easier to go from SASS to JSON, TypeScript, etc, than it is the other way around. The values are accessed through either SASS functions or mixins, appropriate to the type of value in question. At build time we also auto-generate TypeScript maps and export some typed helper functions for accessing them when needed.

## Getting started

Install the package:

```sh
yarn add @moda/tokens --dev
```

Import the library and utilize the mixins or functions in your SCSS files:

```scss
@import "~@moda/tokens";

// Use functions to access values:
p {
  @include text(body1);
}
```

Import the library and utilize the values in TypeScript:

```tsx
import { color } from "@moda/tokens";

color("ink");
```

## API

### SASS

#### Functions

##### [`color($key, $opacity: number)`](https://moda-tokens.netlify.com/#color)

Returns a hexadecimal value associated with the color key. Optionally accepts a value for opacity, which if present, converts the color to `rgba` and includes the opacity as the alpha value. Will throw an error if key is not present within the color map.

#### [`space($indexOrKey)`](https://moda-tokens.netlify.com/#spacing)

Returns a rem value from the spacing scale. Accepts a number (between 0–12) or a named key `"half-x"`, `"2x"` etc. Will throw an error if index is out of bounds or key is not in the map.

#### [`spacing($indices...)`](https://moda-tokens.netlify.com/#spacing)

Shorthand similar to padding/margin shorthand. `spacing(6, 0)` => `2rem 0`, `spacing(4, 2, 6, 2)` => `1rem 0.5rem 2rem 0.5rem`

#### Mixins

##### [`@include text($key, $font: name, $important: boolean|property-name)`](https://moda-tokens.netlify.com/#typography)

Primary method of utilizing typography. Accepts the name of a text treatment and returns the composition of styles (font-size, line-height, letter-spacing, etc.) that form the text treatment. Optionally accepts a `$font` argument which can be either `sans`, `serif`, or `code`. `$important` is a less useful option but available if you need to clobber some legacy styling.

##### [`@include breakpoint($key, $prop: property-name) { @content }`](https://moda-tokens.netlify.com/#breakpoints)

Wraps nested content in the specified breakpoint. `$prop` defaults to `min-width` in a mobile-first approach. Pass it `$prop: max-width` for a more familiar desktop-centric usage.

#### Variables

Refer to the files in the [variables directory](https://github.com/ModaOperandi/tokens/tree/master/lib/assets/stylesheets/tokens/variables).

---

#### Less-common functions

#### `font-family($key)`

Returns the font-stack associated with the key.

#### `__dangerously-get-letter-spacing__($index)`

Returns the letter-spacing associated with the index.

#### `__dangerously-get-line-height__($index)`

Returns the line-height associated with the index.

#### `__dangerously-get-font-size__($index)`

Returns the font-size associated with the index.

#### `text-treatment($key)`

Returns text-treatment map associated the key.

#### `important($important: false, $prop: null)`

Allows one to append `!important` conditionally on the end of a given prop.

#### Less-common mixins

##### `compound($map, $important: false)`

Accepts a map of styles and converts them into actual styles that can be mixed into a class.

### TypeScript

The package exports typed maps built from the SASS maps as well as some similar helper functions for accessing values.

#### Maps

```tsx
colors;
// => colors.all,
//    colors.ui,
//    colors.global,
//    colors.mens,
//    colors.womens,
//    colors.greyscale

typography;
//  => typography.fonts
//     typography['line-heights']
//     typography['letter-spacing']
//     typography['font-scale']
//     typography['root-font-size']
//     typography['text-treatments']

space;
// => space.scale
//    space.map

breakpoints;
// => breakpoints.xs
//    breakpoints.sm
//    breakpoints.md
//    breakpoints.lg
//    breakpoints.xl
```

#### Functions

##### `text`

Accepts the name of a text treatment and, optionally, a font. Returns an object representing the CSS styles for that text treatment.

```tsx
type TextTreatment = "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2" | "eyebrow"

const text: (name: TextTreatment, font?: "serif" | "sans" | "code") => {
    "font-family": string;
    "line-height": string;
    "font-size": string;
    "letter-spacing": number;
} | {
    "font-family": string;
    "line-height": string;
    "font-size": string;
    "letter-spacing": number;
} | ... 7 more ... | {
    ...;
}
```

##### `remToUnitlessPx`

Take some rem value `'0.8125rem'` and turn it into corresponding px (@ root) => `13`

```tsx
const remToUnitlessPx: (value: string) => number;
```

##### `color`

Accepts the name of a color and returns back the corresponding hex value.

```tsx
type Color = "ink" | "cement" | "fog" | "elephant" | "noise" | "snow" | "strawberry" | "code-red" | "mint" | "money-good" | "fuchsia" | "klein-blue" | "brick" | "goldenrod" | "seafoam" | "coral" | ... 7 more ... | "canary"
const color: (name: Color) => string
```

##### `spacing`

Accepts indices from the space scale or strings and returns back spacing values. Example: `margin: ${spacing(8, "auto")};`

```tsx
const spacing: (
  ty: number | string,
  rx?: string | number | undefined,
  b?: string | number | undefined,
  l?: string | number | undefined
) => string | number | undefined;
```
