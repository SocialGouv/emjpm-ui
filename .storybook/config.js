import React from 'react';
import {configure, addDecorator} from '@storybook/react';
import {withA11y} from '@storybook/addon-a11y';
import {ThemeProvider} from 'emotion-theming';
import preset from '@emjpm-ui/theme';
import 'storybook-chromatic';

// import {GlobalStyle} from '../src/components/shared/global';
const ThemeDecorator = (storyFn) => <ThemeProvider theme={preset}>{storyFn()}</ThemeProvider>;

addDecorator(withA11y);
addDecorator(ThemeDecorator);
// addDecorator((story) => (
//   <>
//     <GlobalStyle />
//     {story()}
//   </>
// ));

// automatically import all files ending in *.stories.js
configure(require.context('../packages', true, /\.stories\.(js|mdx)$/), module);
