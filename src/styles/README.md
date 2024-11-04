# Styles

## 🚀 Getting Started

This learning project uses SCSS throughout for styling with Astro's builtin support for CSS processors through Vite.

For **strict package managers**, ensure that SCSS is installed as a dev dependency in order to use it within the project. For more information, check out [Astro's documentation on SCSS](https://docs.astro.build/en/guides/styling/#sass-and-scss)

```sh
pnpm add -D sass
```

## 🏗️ Style Structure

This project uses the `src/styles` directory for global styles, and utilizes Astro's builtin support for scoped styles on a component/page basis.

Styles are configured to be compiled into stylesheets during build time,

### Global Styles

Global styles are stored in a `main.scss` file within the `src/styles` directory. `main.scss` is imported to pages in the `<PageLayout>` component at `src/components/PageLayout.astro`.

Partials loosely follow the 7-1 pattern for organization, only using an `abstracts` and `base` directory. :

```sh
src/styles
├── abstracts
│   │── _functions.scss
│   │── _mixins.scss
│   │── _colors.scss # map for variables
│   │── _fonts.scss # map for variables
│   └── _index.scss
├── base
│   │── _normalize.scss # Nicolas Gallagher's nanormalize css
│   │── _variables.scss # using maps from /abstracts
│   │── _utilities.scss
│   │── _global.scss
│   └── _index.scss
└── main.scss # imported to <PageLayout> component as necessary
```

Partials are forwarded in the above order to follow the cascade.

### Scoped Styles

Visit Astro's documentation on [Scoped Styles](https://docs.astro.build/en/guides/styling/#scoped-styles) for more information on scoped styles and its compiled output.

As general rules:

-   Scoped styles are stored in `src/components/`, `src/layouts/`, and `src/pages/` files respectively.
-   styles are occasionally passed down via classname and `...rest` attributes to child elements.

## Patterns

Here are some common patterns used in this project:

### Naming Conventions

-   **class names** and **ids** are in `camel-case` format.
-   **BEM** is used for naming blocks, elements and modifiers.

Please avoid nested block and modifier class names with scss `&` operator. Although convenient, it is difficult to maintain. **Flatten BEM Declarations** for easier organization andreadability.

#### Nested BEM with `&` Operator 😕

```scss
.block {
    &__element {
        // ...
        &--modifier {
            // ...
        }
    }
}
```

#### Flatten BEM Declarations 👍

```scss
.block {
    //...
}

.block__element {
    //...
}

.block__element--modifier {
    //...
}
```

### CSS Variables

This project uses variables to control common styles, such as spacing, colors, and fonts:

-   **Global variables** follow the standard `--variable-name` prefix.
-   **Scoped variables** are prefixed with a `--_variable-name` to indicate that they are scoped to the block.

For example, scoped variables like spacing, colors, and layouts are used to easily create modifier classes by redefining scoped variables:

```scss
// button component styles
.button {
    --_color: var(--clr-rose-50, red);
    --_border-radius: #{rem(8)};
    --_border: 1px solid var(--_color);

    color: var(--_color);
    border-radius: var(--_border-radius);
    border: var(--_border);
}
// modifier classes
.button--primary {
    --_color: var(--clr-green-500);
    --_border-radius: #{rem(8)};
    --_border: 1px solid transparent;
}
```
