# emjpm-ui
ui library for emjpm

Storybook with auto docs can be found here https://emjpm-design-system.netlify.com

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