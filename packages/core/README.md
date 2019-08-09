# emjpm-ui
ui library for emjpm

Storybook with auto docs can be found here https://emjpm-design-system.netlify.com

## Core package

you can find the core component in that package.

you need to provide a theme with theme-ui with theme from the package https://github.com/SocialGouv/emjpm-design-system/tree/master/packages/theme

exemple usage : 

```javascript
import {Button} from "@socialgouv/emjpm-ui-core"

const App =() => (
  <div>
    <Button>Content<Button/>
  </div>
)
```