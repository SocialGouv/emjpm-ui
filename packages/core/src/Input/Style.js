const InputWrapperStyle = (props) => {
  return {
    bg: 'cardPrimary',
    border: '1px solid',
    borderColor: () => {
      if (props.isValid) return 'success';
      if (props.hasError) return 'error';
      return 'border';
    },
    borderRadius: 'default',
    boxShadow: 'none',
    fontFamily: '"Open Sans", sans-serif',
    fontSize: '1',
    height: props.size === 'small' ? '44px' : '54px',
    position: 'relative',
    width: '100%',
  };
};

const InputStyle = (props) => {
  return {
    bg: 'transparent',
    border: '0',
    boxShadow: 'none',
    color: 'text',
    fontSize: '1',
    fontWeight: props.isActive ? '700' : '500',
    height: props.size === 'small' ? '42px' : '52px',
    lineHeight: props.size === 'small' ? '22px' : '32px',
    mt: props.isActive ? '5px' : '0px',
    opacity: props.isActive ? '1' : '0',
    outline: 'none',
    position: 'relative',
    px: '2',
    py: '1',
    transition: '150ms ease-in-out all',
    width: '100%',
    zIndex: '1',
  };
};

const LabelStyle = (props) => {
  return {
    color: () => {
      if (props.isActive) return 'primary';
      return 'textSecondary';
    },
    fontSize: () => {
      if (props.isActive) return props.size === 'small' ? '10px' : '0';
      return '1';
    },
    fontWeight: '600',
    height: props.size === 'small' ? '42px' : '52px',
    left: '0',
    lineHeight: props.size === 'small' ? '22px' : '32px',
    position: 'absolute',
    px: '2',
    py: '1',
    top: props.isActive ? '-12px' : '0px',
    transition: '150ms ease-in-out all',
    width: '100%',
    zIndex: '0',
  };
};

export { InputWrapperStyle, InputStyle, LabelStyle };