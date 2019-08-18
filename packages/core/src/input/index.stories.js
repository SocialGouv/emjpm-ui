import React from 'react';
import {Input} from '.';

export default {
  title: 'Design System|Input',
  component: Input,
};

export const InputStory = () => <Input name="test" placeholder="Placeholder" />;

export const InputStoryValid = () => <Input name="test2" isValid placeholder="Placeholder" />;

export const InputStoryError = () => <Input name="test2" hasError placeholder="Placeholder" />;

export const InputStorySmall = () => <Input size="small" name="test2" placeholder="Placeholder" />;

export const InputStoryDate = () => <Input type="date" name="test2" placeholder="Placeholder" />;
