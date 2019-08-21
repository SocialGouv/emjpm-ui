import React from 'react';

import { Indicator } from '.';

export default {
  component: Indicator,
  title: 'Components | Indicator',
};

export const IndicatorStory = () => (
  <Indicator error={false} loading={false} indicator="4285" title="indicator title" />
);
