import React from 'react';
import {storiesOf} from '@storybook/react';

import ButtonSmall from '../src';

storiesOf('Button Small', module)
  .add('with text', () => {
    return <ButtonSmall>{'Ajouter une mesure'}</ButtonSmall>;
  })
  .add('with variant', () => {
    return <ButtonSmall variant="outline">{'Ajouter une mesure'}</ButtonSmall>;
  });
