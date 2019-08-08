import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Check from 'emotion-icons/fa-solid/Check';
import styled from '@emotion/styled';
import {Box, Text, Flex} from 'rebass';

const InputCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const InputCheckboxWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const CheckboxStyle = (props) => {
  return {
    bg: props.checked ? 'primary' : 'cardPrimary',
    verticalAlign: 'middle',
    mr: '2',
    width: '20px',
    height: '20px',
    padding: '4px',
    borderRadius: 'default',
    border: '1px solid',
    borderColor: props.checked ? 'primary' : 'border',
  };
};

const IconWrapperStyle = (props) => {
  return {
    verticalAlign: '.125em',
    height: '10px',
    lineHeight: '8px',
    display: props.checked ? 'block' : 'none',
  };
};

const BaseCheckBox = (props) => {
  return (
    <Box sx={CheckboxStyle(props)}>
      <Box sx={IconWrapperStyle(props)}>
        <Check color="#FFFFFF" />
      </Box>
    </Box>
  );
};

export const CheckBox = (props) => {
  const {label, name} = props;
  const [isChecked, toogleCheck] = useState(false);
  return (
    <InputCheckboxWrapper>
      <Box htmlFor={name} as="label">
        <InputCheckbox
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
    </InputCheckboxWrapper>
  );
};

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
