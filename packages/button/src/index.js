import React from 'react';
import {Button as RebassButton} from 'rebass';

const Button = (props) => (
  <RebassButton
    {...props}
    sx={{
      mx: 'auto',
      px: 3,
      py: 2,
      fontSize: 1,
      fontWeight: 500
    }}
  />
);

export default Button;
