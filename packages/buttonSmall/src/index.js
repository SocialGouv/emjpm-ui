import React from 'react';
import {Button as RebassButton} from 'rebass';

const ButtonSmall = (props) => (
  <RebassButton
    {...props}
    sx={{
      mx: 'auto',
      px: 2,
      py: 1,
      fontSize: 0,
      fontWeight: 500
    }}
  />
);

export default ButtonSmall;
