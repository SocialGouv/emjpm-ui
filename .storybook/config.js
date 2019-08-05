import React from 'react';
import {configure, addDecorator} from '@storybook/react';
import {ThemeProvider} from 'emotion-theming';
import preset from '@emjpm-ui/theme';
const req = require.context('../packages', true, /.story.js$/);

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={preset}>{storyFn()}</ThemeProvider>
);
addDecorator(ThemeDecorator);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
