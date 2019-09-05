const MandatairelistStyle = {
  bg: 'white',
  justifyContent: 'space-between',
};

const columnStyle = (isMobileHidden, isTabletHidden) => {
  return {
    '@media screen and (max-width: 40em)': {
      display: isMobileHidden ? 'none' : 'flex',
    },
    '@media screen and (max-width: 52em)': {
      display: isTabletHidden ? 'none' : 'flex',
    },
    flexDirection: 'column',
  };
};

const titleStyle = {
  color: 'black',
  fontFamily: 'heading',
  fontSize: '15px',
  fontWeight: '600',
  my: '4px',
  overflow: 'hidden',
  'text-overflow': 'ellipsis',
  'white-space': 'nowrap',
  width: '100px',
};

const subtitleStyle = {
  color: 'mediumGray',
  fontFamily: 'body',
  fontSize: '12px',
  fontWeight: '600',
};

const labelStyle = {
  color: 'mediumGray',
  fontFamily: 'body',
  fontSize: '11px',
  fontWeight: '600',
  mb: '5px',
  mt: '7px',
};

const descriptionStyle = (isPositive) => {
  return {
    color: isPositive ? 'black' : 'error',
    fontFamily: 'heading',
    fontSize: '13px',
    fontWeight: '600',
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap',
  };
};

const decorationStyle = {
  bg: 'yellow',
  height: '100%',
  left: 0,
  position: 'absolute',
  top: 0,
  width: '3px',
};

const cardStyle = {
  mb: '1',
  overflow: 'hidden',
  pl: '16px',
  position: 'relative',
};

export {
  MandatairelistStyle,
  columnStyle,
  titleStyle,
  subtitleStyle,
  labelStyle,
  descriptionStyle,
  decorationStyle,
  cardStyle,
};
