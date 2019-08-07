import React from 'react';
import {css} from '@emotion/core';
import {Text as RebassText} from 'rebass';

const baseStyle = {
  fontWeight: 500,
  color: 'text',
  fontSize: 1,
  fontFamily: '"Open Sans", sans-serif',
};

// Basic Text
export const Text = (props) => {
  return <RebassText {...props} sx={baseStyle} fontSize="0" />;
};

// Text 1
export const Text1S = (props) => {
  return <RebassText {...props} sx={baseStyle} fontSize="0" />;
};

export const Text1 = (props) => {
  return <RebassText {...props} sx={baseStyle} />;
};

export const Text1M = (props) => {
  return <RebassText {...props} sx={baseStyle} fontSize="2" />;
};

export const Text1L = (props) => {
  return <RebassText {...props} sx={baseStyle} fontSize="3" />;
};

export const Text1Bold = (props) => {
  return <RebassText {...props} sx={baseStyle} fontWeight="700" />;
};

// Text 2

export const Text2S = (props) => {
  return <RebassText {...props} sx={baseStyle} fontSize="0" />;
};

export const Text2 = (props) => {
  return <RebassText {...props} sx={baseStyle} color="text2" />;
};

export const Text2M = (props) => {
  return <RebassText {...props} sx={baseStyle} fontSize="2" />;
};

export const Text2L = (props) => {
  return <RebassText {...props} sx={baseStyle} fontSize="3" />;
};

export const Text2Bold = (props) => {
  return <RebassText {...props} sx={baseStyle} fontWeight="600" color="text2" />;
};

// Text 3

export const Text3S = (props) => {
  return <RebassText {...props} sx={baseStyle} fontSize="0" color="textTertiary" />;
};

export const Text3 = (props) => {
  return <RebassText {...props} sx={baseStyle} color="textTertiary" />;
};

export const Text3M = (props) => {
  return <RebassText {...props} sx={baseStyle} fontSize="2" color="textTertiary" />;
};

export const Text3L = (props) => {
  return <RebassText {...props} sx={baseStyle} fontSize="3" color="textTertiary" />;
};

export const Text3Bold = (props) => {
  return <RebassText {...props} sx={baseStyle} fontWeight="600" color="textTertiary" />;
};
