import React from 'react';
import PropTypes from 'prop-types';
import {Box, Text, Flex} from 'rebass';

const RadioInputStyle = () => {
  return {
    border: '0',
    clip: 'rect(0 0 0 0)',
    clippath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',
  };
};

const RadioWrapperStyle = () => {
  return {
    fontWeight: '600',
    fontFamily: 'body',
    display: 'inline-block',
    verticalAlign: 'middle',
  };
};

const RadioStyle = (props) => {
  return {
    bg: 'cardPrimary',
    verticalAlign: 'middle',
    mr: '2',
    width: '20px',
    height: '20px',
    padding: '4x',
    borderRadius: 'circle',
    border: '1px solid',
    borderColor: props.checked ? 'primary' : 'border',
  };
};

const InnerRadioStyle = (props) => {
  return {
    height: '10px',
    width: '10px',
    margin: '4px',
    borderRadius: 'circle',
    bg: props.checked ? 'primary' : 'cardPrimary',
  };
};

const BaseRadio = (props) => {
  return (
    <Box sx={RadioStyle(props)}>
      <Box sx={InnerRadioStyle(props)}></Box>
    </Box>
  );
};

export const Radio = (props) => {
  const {label, id, name, checked} = props;
  return (
    <Box sx={RadioWrapperStyle}>
      <Box htmlFor={id} as="label">
        <Box sx={RadioInputStyle()} as="input" name={name} id={id} checked={checked} type="Radio" {...props} />
        <Flex>
          <BaseRadio checked={checked} />
          <Text lineHeight="20px">{label}</Text>
        </Flex>
      </Box>
    </Box>
  );
};

Radio.propTypes = {
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
