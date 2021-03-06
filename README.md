:skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull:

<br>
<br>

<h3 align=center><a href=https://github.com/SocialGouv/emjpm/tree/master/packages/ui>Migrated to SocialGouv/emjpm monorepo</a></h3>

<br>
<br>

:skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull:

<br>
<br>
<br>
<br>

---

<br>
<br>
<br>

# emjpm-ui
ui library for emjpm

[![netlify](https://www.netlify.com/img/global/badges/netlify-color-accent.svg)](https://www.netlify.com/)

Storybook with auto docs can be found here https://emjpm-design-system.netlify.com

Components

[![npm version](https://badge.fury.io/js/%40socialgouv%2Femjpm-ui-components.svg)](https://badge.fury.io/js/%40socialgouv%2Femjpm-ui-components)

Core Package

[![npm version](https://badge.fury.io/js/%40socialgouv%2Femjpm-ui-core.svg)](https://badge.fury.io/js/%40socialgouv%2Femjpm-ui-core)

# Installation and Usage

## theming

You can use @socialgouv/emjpm-ui-theme or create your own based on that one, it should respect colors and variant 

To provide a theme to the app you should use https://theme-ui.com/getting-started/

### install dependencies
```zsh
yarn add theme-ui @emotion/core @mdx-js/react
```

### adding theme to the app
```javascript
// basic usage
import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '@socialgouv/emjpm-ui-theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <Content/>
  </ThemeProvider>
)
```

## Global Style (reset/normalise.css)

you can use the package @socialgouv/emjpm-ui-global-style and insert it in your head on anywhere you need

in exemple 

```javascript
import { GlobalStyle } from '@socialgouv/emjpm-ui-global-style'

const App =() => (
  <div>
    <GlobalStyle/>
  </div>
)
```

## Core package

you can find the core component in that package.

exemple usage : 

```javascript
import {Button} from "@socialgouv/emjpm-ui-core"

const App =() => (
  <div>
    <Button>Content<Button/>
  </div>
)
```

## Release policy

### Auto

Trigger a custom build on [Travis](https://travis-ci.com/SocialGouv/emjpm-ui) (in the "More options" right menu) on the `master` branch with a custom config:

```yml
env:
  global:
    - RELEASE=true
```

### Generate a component with hygen

```zsh
yarn generate:component
```

```zsh
yarn generate:core
```

```zsh
yarn generate
```
