import React from 'react';
import {storiesOf} from '@storybook/react';

import Button from '.';

storiesOf('Button', module)
  .add('with text', () => {
    return <Button>{'Ajouter une mesure'}</Button>;
  })
  .add('with variant', () => {
    return <Button variant="outline">{'Ajouter une mesure'}</Button>;
  });
