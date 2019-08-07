import React, {useState} from 'react';
import PropTypes from 'prop-types';
// import styled from '@emotion/styled';
import {Box} from 'rebass';

const InputWrapperStyle = (props) => {
  return {
    fontSize: '1',
    width: '100%',
    bg: 'cardPrimary',
    position: 'relative',
    height: '54px',
    borderRadius: 'default',
    boxShadow: 'none',
    border: '1px solid',
    borderColor: () => {
      if (props.isValid) return 'success';
      if (props.hasError) return 'error';
      return 'border';
    },
  };
};

const InputStyle = (props) => {
  return {
    zIndex: '1',
    bg: 'transparent',
    position: 'relative',
    width: '100%',
    boxShadow: 'none',
    border: '0',
    px: '2',
    py: '1',
    height: '52px',
    lineHeight: '32px',
    color: 'text',
    transition: '150ms ease-in-out all',
    mt: props.isActive ? '5px' : '0px',
    opacity: props.isActive ? '1' : '0',
    fontWeight: props.isActive ? '700' : '500',
  };
};

const LabelStyle = (props) => {
  return {
    transition: '150ms ease-in-out all',
    zIndex: '0',
    fontWeight: '600',
    height: '52px',
    lineHeight: '32px',
    position: 'absolute',
    left: '0',
    top: props.isActive ? '-12px' : '0px',
    color: () => {
      if (props.isActive) return 'primary';
      return 'textSecondary';
    },
    fontSize: props.isActive ? '0' : '1',
    px: '2',
    py: '1',
    width: '100%',
  };
};

const InputWrapper = (props) => {
  return <Box as="div" sx={InputWrapperStyle(props)} {...props} />;
};

const InputElement = (props) => {
  return <Box as="input" sx={InputStyle(props)} {...props} />;
};

const InputLabel = (props) => {
  const {children} = props;
  return (
    <Box as="label" sx={LabelStyle(props)} {...props}>
      {children}
    </Box>
  );
};

export const Input = (props) => {
  const {placeholder, isLoading, isValid, hasError, name} = props;
  const [isFocus, toggleFocus] = useState(false);
  const [hasValue, toogleValue] = useState(false);
  const isActive = isFocus || hasValue;

  return (
    <InputWrapper isValid={isValid} hasError={hasError}>
      {isLoading ? (
        <div>isLoading</div>
      ) : (
        <InputElement
          {...props}
          placeholder={null}
          isActive={isActive}
          name={name}
          onChange={(e) => {
            toogleValue(e.target.value.length > 0);
          }}
          onBlur={() => toggleFocus(false)}
          onFocus={() => toggleFocus(true)}
        />
      )}
      <InputLabel htmlFor={name} isActive={isActive}>
        {placeholder}
      </InputLabel>
    </InputWrapper>
  );
};

InputLabel.propTypes = {
  children: PropTypes.node.isRequired,
};

Input.propTypes = {
  isValid: PropTypes.bool,
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Input.defaultProps = {
  isValid: false,
  hasError: false,
  isLoading: false,
};
