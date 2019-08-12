import React from 'react';
import {Spinner} from '.';

export default {
  title: 'Design System|Spinner',
  component: Spinner,
};

export const SpinnerStory = () => <Spinner />;

export const SpinnerStoryLight = () => <Spinner variant="bgLight" />;

export const SpinnerStoryPrimary = () => <Spinner variant="bgDark" />;
