import React from 'react';

import { FlexWrapper } from '../../../core/src/Grid';
import { Mandatairelist } from '.';

export default {
  component: Mandatairelist,
  title: 'Components | Mandatairelist',
};

export const MandatairelistStory = () => (
  <FlexWrapper mt="5">
    <Mandatairelist />
  </FlexWrapper>
);
