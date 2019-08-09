# emjpm-ui
ui library for emjpm

# Installation and Usage

## theming

You can use @socialgouv/emjpm-ui-theme or create your own based on that one, it should respect colors and variant 

To provide a theme to the app you should use https://theme-ui.com/getting-started/

```
// basic usage
import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '@socialgouv/emjpm-ui-theme'

export default props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
)
```

## Global Style (reset/normalise.css)

you can use the package @socialgouv/emjpm-ui-global-style and insert it in your head on anywhere you need

in exemple 

```
import { GlobalStyle } from '@emotion/core'

render(
  <div>
    <GlobalStyle
    />
  </div>
)
```

## Core package

you can find the core component in that package.