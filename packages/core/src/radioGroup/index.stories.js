import React, {Fragment} from 'react';
import {RadioGroup} from '.';

export default {
  title: 'Design System|RadioGroup',
  component: RadioGroup,
};

const options = [
  {name: 'color', value: 'red', label: 'Red'},
  {name: 'color', value: 'blue', label: 'Blue'},
  {name: 'color', value: 'yellow', label: 'Yellow'},
  {name: 'color', value: 'green', label: 'Green'},
  {name: 'color', value: 'black', label: 'Black'},
];

export const TextStory = () => {
  return (
    <Fragment>
      <RadioGroup
        defaultValue={options[2].value}
        onChange={(currentValue) => console.log(currentValue)}
        options={options}
      />
    </Fragment>
  );
};
