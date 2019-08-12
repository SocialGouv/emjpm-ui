import React from 'react';
import PropTypes from 'prop-types';
import {Box, Button as RebassButton} from 'rebass';
import {Spinner} from '../spinner';

const spinnerStyle = () => {
  return {
    position: 'absolute',
    left: '50%',
    ml: '-35px',
    right: '0',
  };
};

const content = (props) => {
  const {isLoading} = props;
  return {
    opacity: isLoading ? '0' : '1',
  };
};

const buttonStyle = {
  position: 'relative',
  outline: 'none',
  mx: 'auto',
  px: 3,
  py: 2,
  fontSize: 1,
  fontWeight: 500,
  '&:active': {
    opacity: '0.8',
  },
};

const Button = (props) => {
  const {isLoading, children} = props;
  return (
    <RebassButton {...props} sx={buttonStyle}>
      {isLoading && (
        <Box sx={spinnerStyle}>
          <Spinner variant="bgLight" />
        </Box>
      )}
      <Box isLoading={isLoading} sx={content(props)}>
        {children}
      </Box>
    </RebassButton>
  );
};

export {Button};

Button.propTypes = {
  isLoading: PropTypes.bool,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  isLoading: false,
  variant: null,
};
