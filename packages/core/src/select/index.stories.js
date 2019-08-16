import React, {useState} from 'react';
import {Select} from '.';

export default {
  title: 'Design System|Select',
  component: Select,
};

const options = [
  {value: 'chocolate', label: 'Chocolate'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanilla', label: 'Vanilla'},
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
