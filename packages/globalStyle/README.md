# emjpm-ui
ui library for emjpm

Storybook with auto docs can be found here https://emjpm-design-system.netlify.com

# Installation and Usage

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