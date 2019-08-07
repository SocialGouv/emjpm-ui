import React from 'react';
import {Input} from '.';

export default {
  title: 'Design System|Input',
  component: Input,
};

export const TextStory = () => <Input name="test" placeholder="Placeholder" />;

export const TextStoryValid = () => <Input name="test2" isValid placeholder="Placeholder" />;

export const TextStoryError = () => <Input name="test2" hasError placeholder="Placeholder" />;
