import React, {Fragment} from 'react';
import {configure, addDecorator} from '@storybook/react';
import {withA11y} from '@storybook/addon-a11y';
import {ThemeProvider} from 'theme-ui';
import preset from '../packages/theme/src';
import 'storybook-chromatic';
import {GlobalStyle} from '../packages/globalStyle/src';
// import {GlobalStyle} from '../src/components/shared/global';
const ThemeDecorator = (storyFn) => {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={preset}>{storyFn()}</ThemeProvider>
    </Fragment>
  );
};

addDecorator(withA11y);
addDecorator(ThemeDecorator);

configure(require.context('../packages', true, /\.stories\.(js|mdx)$/), module);
