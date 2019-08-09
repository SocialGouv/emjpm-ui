import React, {Fragment} from 'react';
import {Radio} from '.';

export default {
  title: 'Design System|Radio',
  component: Radio,
};

export const TextStory = () => {
  return (
    <Fragment>
      <Radio label="label" checked={false} id="radio1" name="test" />
    </Fragment>
  );
};
