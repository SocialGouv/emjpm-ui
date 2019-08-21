import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Box, Flex, Text } from 'rebass';
import { Check } from 'styled-icons/fa-solid';

import { CheckboxInputStyle, CheckboxStyle, CheckboxWrapperStyle, IconWrapperStyle } from './style';

const BaseCheckBox = (props) => {
  return (
    <Box sx={CheckboxStyle(props)}>
      <Box sx={IconWrapperStyle(props)}>
        <Check color="#FFFFFF" />
      </Box>
    </Box>
  );
};

const CheckBox = (props) => {
  const { label, name } = props;
  const [isChecked, toogleCheck] = useState(false);
  return (
    <Box sx={CheckboxWrapperStyle}>
      <Box htmlFor={name} as="label">
        <Box
          sx={CheckboxInputStyle()}
          as="input"
          name={name}
          id={name}
          checked={isChecked}
          onChange={(e) => {
            toogleCheck(e.target.checked);
          }}
          type="checkbox"
          {...props}
        />
        <Flex>
          <BaseCheckBox checked={isChecked} />
          <Text lineHeight="20px">{label}</Text>
        </Flex>
      </Box>
    </Box>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export { CheckBox };
