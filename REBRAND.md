# Rebrand

To facillitate the rebrand transition we're extracting global values that are changing (fonts, colors, sizes, etc.) [into a central map](lib/assets/stylesheets/moda-themes/_themes.scss).

This document contains some information about how to map between old and new styles and what you need to know going forward.

#### Old values are keyed under `legacy`. New values are keyed under `global`.

`global` is a good name for this going forward since it will represent obviously global values. We'll eventually be supporting subtle variations in color and typography across mens/womens, so new themes will be added to this map.

## Fonts

Please look at the [moda-typography] repository for more detailed information on the fonts. Old fonts have been normalized into supporting font families. This means that when you want an italic weight for instance, you don't specify an italic font-name, you specify the actual font-family and then use `font-style: italic;`.

### Transitioning

#### `Gotham Book` becomes `Moda Sans`.

If you currently wish to use `Gotham Book`:

```scss
font-family: font-family('sans');
```

#### `Gotham Medium` becomes `Moda Sans`.

If you currently wish to use `Gotham Medium`:

```scss
font-family: font-family('sans');
font-weight: bold;
```

#### `Miller Headline Roman` becomes `Moda Serif`.

If you currently wish to use `Miller Headline Roman`:

```scss
font-family: font-family('serif');
```

#### `Miller Headline Light` becomes `Moda Serif`.

If you currently wish to use `Miller Headline Light`:

```scss
font-family: font-family('serif');
font-weight: lighter;
```

#### `Miller Headline Light Italic` becomes `Moda Serif`.

If you currently wish to use `Miller Headline Light Italic`:

```scss
font-family: font-family('serif');
font-weight: lighter;
font-style: italic;
```

#### `Caslon`.

If you wish to use a serif typeface but know you'll want it to be `Caslon` (in certain body copy for instance):

```scss
font-family: font-family('body');
```

`Caslon` is mapped to `Miller Headline` for the `legacy` theme. `Caslon` supports italics.


### Do not fear faux styles

The font-face declarations for the rebranded values [have been overloaded to ensure that faux styles (faux bold, faux italic) are impossible.](https://github.com/ModaOperandi/moda-typography#about) This means that post-transition every instance of `font-weight: bold;` can be safely deleted, for instance, it will have no effect otherwise.
