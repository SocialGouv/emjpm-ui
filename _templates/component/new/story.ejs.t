---
to: packages/<%=package%>/src/<%= h.capitalize(name) %>/index.stories.jsx
---
import React from 'react';

import { <%= h.capitalize(name) %> } from '.';

export default {
  component: <%= h.capitalize(name) %>,
  title: '<%= h.capitalize(package) %> | <%= h.capitalize(name) %>',
};

export const <%= h.capitalize(name) %>Story = () => <<%= h.capitalize(name) %> />;
