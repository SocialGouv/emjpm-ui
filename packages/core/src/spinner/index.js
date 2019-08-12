import React from 'react';
import {keyframes} from '@emotion/core';
import PropTypes from 'prop-types';
import {Box} from 'rebass';

const animation = keyframes`
  0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
`;

const SpinnerStyle = () => {
  return {
    width: '70px',
    height: '22px',
    textAlign: 'center',
  };
};

const Bounce = (delay) => {
  return {
    m: '5px',
    width: '12px',
    height: '12px',
    borderRadius: '100%',
    display: 'inline-block',
    animation: `${animation} 1.4s infinite ease-in-out both`,
    'animation-delay': delay,
  };
};

export const Spinner = (props) => {
  const {variant} = props;
  return (
    <Box sx={SpinnerStyle}>
      <Box sx={Bounce('0', variant)} variant={variant}></Box>
      <Box sx={Bounce('-0.16s', variant)} variant={variant}></Box>
      <Box sx={Bounce('-0.32s', variant)} variant={variant}></Box>
    </Box>
  );
};

Spinner.propTypes = {
  variant: PropTypes.string,
};

Spinner.defaultProps = {
  variant: 'bgDark',
};
