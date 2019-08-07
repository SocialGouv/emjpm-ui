import React from 'react';
import {Button} from '.';

export default {
  title: 'Design System|Button',
  component: Button,
};

export const normal = () => <Button>Ajouter une mesure</Button>;

export const outline = () => <Button variant="outline"> {'outline button'}</Button>;

normal.story = {
  name: 'button',
};
