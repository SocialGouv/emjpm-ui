import React from 'react';
import { Text as RebassText } from 'rebass';

const baseStyle = {
  color: 'text',
  fontFamily: '"Open Sans", sans-serif',
  fontSize: 1,
  fontWeight: 500,
};

// Basic Text
const Text = (props) => {
  return <RebassText {...props} sx={baseStyle} fontSize="0" />;
};

// Text 1
const Text1S = (props) => {
  return <RebassText {...props} sx={baseStyle} fontSize="0" />;
};

const Text1 = (props) => {
  return <RebassText {...props} sx={baseStyle} />;
};

const Text1M = (props) => {
  return <RebassText {...props} sx={baseStyle} fontSize="2" />;
};

const Text1L = (props) => {
  return <RebassText {...props} sx={baseStyle} fontSize="3" />;
};

const Text1Bold = (props) => {
  return <RebassText {...props} sx={baseStyle} fontWeight="700" />;
};

// Text 2
const Text2S = (props) => {
  return <RebassText {...props} sx={baseStyle} fontSize="0" />;
};

const Text2 = (props) => {
  return <RebassText {...props} sx={baseStyle} color="text2" />;
};

const Text2M = (props) => {
  return <RebassText {...props} sx={baseStyle} fontSize="2" />;
};

const Text2L = (props) => {
  return <RebassText {...props} sx={baseStyle} fontSize="3" />;
};

const Text2Bold = (props) => {
  return <RebassText {...props} sx={baseStyle} fontWeight="600" color="text2" />;
};

// Text 3
const Text3S = (props) => {
  return <RebassText {...props} sx={baseStyle} fontSize="0" color="textTertiary" />;
};

const Text3 = (props) => {
  return <RebassText {...props} sx={baseStyle} color="textTertiary" />;
};

const Text3M = (props) => {
  return <RebassText {...props} sx={baseStyle} fontSize="2" color="textTertiary" />;
};

const Text3L = (props) => {
  return <RebassText {...props} sx={baseStyle} fontSize="3" color="textTertiary" />;
};

const Text3Bold = (props) => {
  return <RebassText {...props} sx={baseStyle} fontWeight="600" color="textTertiary" />;
};

export {
  Text,
  Text1S,
  Text1,
  Text1M,
  Text1L,
  Text1Bold,
  Text2S,
  Text2,
  Text2M,
  Text2L,
  Text2Bold,
  Text3S,
  Text3,
  Text3M,
  Text3L,
  Text3Bold,
};
