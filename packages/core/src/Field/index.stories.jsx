import React from 'react';
import { Box } from "rebass";

import { Input } from '../Input';
import { Field } from '.';

export default {
  component: Field,
  title: 'Core | Field',
};

export const FieldStory = () => (
  <Box p={4}>
    <Field>
      <Input name="test1" placeholder="Placeholder 1" />
    </Field>
    <Field>
      <Input name="test2" placeholder="Placeholder 2" />
    </Field>
  </Box>
);
