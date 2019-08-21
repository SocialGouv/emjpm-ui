import React, { useState } from 'react';

import { Select } from '.';

export default {
  component: Select,
  title: 'Core | Select',
};

const options = [
  { label: 'Chocolate', value: 'chocolate' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Vanilla', value: 'vanilla' },
];

export const SelectStory = () => {
  const [selectedValue, changeValue] = useState(false);
  return <Select options={options} value={selectedValue} onChange={(selectedOption) => changeValue(selectedOption)} />;
};

export const SelectLargeStory = () => {
  const [selectedValue, changeValue] = useState(false);
  return (
    <Select
      options={options}
      size="large"
      value={selectedValue}
      onChange={(selectedOption) => changeValue(selectedOption)}
    />
  );
};

export const SelectSmallStory = () => {
  const [selectedValue, changeValue] = useState(false);
  return (
    <Select
      options={options}
      size="small"
      value={selectedValue}
      onChange={(selectedOption) => changeValue(selectedOption)}
    />
  );
};
