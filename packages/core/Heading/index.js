import React from 'react';
import PropTypes from 'prop-types';
import {css} from '@emotion/core';
import {Heading as RebassHeading} from 'rebass';

const baseStyle = {
  fontWeight: 700,
  color: 'black'
};

export const Heading1 = (props) => {
  return <RebassHeading as="div" {...props} fontSize={'6'} sx={baseStyle} />;
};

export const Heading2 = (props) => {
  return <RebassHeading as="div" {...props} fontSize={'5'} sx={baseStyle} />;
};

export const Heading3 = (props) => {
  return <RebassHeading as="div" {...props} fontSize={'4'} sx={baseStyle} />;
};

export const Heading4 = (props) => {
  return <RebassHeading as="div" {...props} fontSize={'3'} sx={baseStyle} />;
};

export const Heading5 = (props) => {
  return <RebassHeading as="div" {...props} fontSize={'2'} sx={baseStyle} />;
};
