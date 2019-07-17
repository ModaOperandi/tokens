# Usage

`moda-themes` is packaged as a Ruby gem and an NPM package. See [Getting Started](https://github.com/ModaOperandi/moda-themes#getting-started) for installation instructions if you're including it in a new repository.

### `website` & `mo-display`

```scss
@import 'moda-themes/themes';

// Now you can use `font-family('whatever')`
```

If you try to access a themed value that doesn't exist, SASS will throw an error!

### `mojo`

It's been imported globally and due to the way SASS imports work in Ruby you shouldn't need to re-import anything. If it's not available the context you're working in you can just import it:

```scss
@import 'moda-themes';
```
