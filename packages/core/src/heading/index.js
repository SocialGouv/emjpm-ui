import React from 'react';
import {Heading as RebassHeading} from 'rebass';

const baseStyle = {
  fontWeight: 700,
  color: 'black',
};

export const Heading0 = (props) => {
  return <RebassHeading as="div" fontSize={7} sx={baseStyle} {...props} />;
};

export const Heading1 = (props) => {
  return <RebassHeading as="div" fontSize={6} sx={baseStyle} {...props} />;
};

export const Heading2 = (props) => {
  return <RebassHeading as="div" fontSize={5} sx={baseStyle} {...props} />;
};

export const Heading3 = (props) => {
  return <RebassHeading as="div" fontSize={4} sx={baseStyle} {...props} />;
};

export const Heading4 = (props) => {
  return <RebassHeading as="div" fontSize={3} sx={baseStyle} {...props} />;
};

export const Heading5 = (props) => {
  return <RebassHeading as="div" fontSize={2} sx={baseStyle} {...props} />;
};
