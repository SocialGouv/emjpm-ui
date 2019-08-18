import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Box} from 'rebass';

const InputWrapperStyle = (props) => {
  return {
    fontSize: '1',
    width: '100%',
    bg: 'cardPrimary',
    position: 'relative',
    height: props.size === 'small' ? '44px' : '54px',
    borderRadius: 'default',
    boxShadow: 'none',
    border: '1px solid',
    fontFamily: '"Open Sans", sans-serif',
    borderColor: () => {
      if (props.isValid) return 'success';
      if (props.hasError) return 'error';
      return 'border';
    },
  };
};

const InputStyle = (props) => {
  return {
    fontSize: '1',
    outline: 'none',
    zIndex: '1',
    bg: 'transparent',
    position: 'relative',
    width: '100%',
    boxShadow: 'none',
    border: '0',
    px: '2',
    py: '1',
    height: props.size === 'small' ? '42px' : '52px',
    lineHeight: props.size === 'small' ? '22px' : '32px',
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
    height: props.size === 'small' ? '42px' : '52px',
    lineHeight: props.size === 'small' ? '22px' : '32px',
    position: 'absolute',
    left: '0',
    top: props.isActive ? '-12px' : '0px',
    color: () => {
      if (props.isActive) return 'primary';
      return 'textSecondary';
    },
    fontSize: () => {
      if (props.isActive) return props.size === 'small' ? '10px' : '0';
      return '1';
    },
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
  const {onChange, placeholder, isValid, hasError, name, required, size} = props;
  const [isFocus, toggleFocus] = useState(false);
  const [hasValue, toogleValue] = useState(false);
  const isActive = isFocus || hasValue;

  return (
    <InputWrapper size={size} isValid={isValid} hasError={hasError}>
      <InputElement
        size={size}
        aria-label={name}
        aria-required={required}
        placeholder={null}
        isActive={isActive}
        name={name}
        onChange={(e) => {
          toogleValue(e.target.value.length > 0);
          onChange(e);
        }}
        onBlur={() => toggleFocus(false)}
        onFocus={() => toggleFocus(true)}
        {...props}
      />
      <InputLabel size={size} aria-label={name} htmlFor={name} isActive={isActive}>
        {placeholder}
      </InputLabel>
    </InputWrapper>
  );
};

InputLabel.propTypes = {
  children: PropTypes.node.isRequired,
};

Input.propTypes = {
  onChange: PropTypes.func,
  size: PropTypes.string,
  isValid: PropTypes.bool,
  hasError: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

Input.defaultProps = {
  onChange: (e) => {
    console.log(e.target.value);
  },
  required: false,
  isValid: false,
  hasError: false,
  size: 'large',
};
