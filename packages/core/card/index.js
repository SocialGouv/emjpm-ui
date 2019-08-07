import React from 'react';
import {Card as RebassCard} from 'rebass';

const Card = (props) => (
  <RebassCard
    {...props}
    sx={{
      mx: 'auto',
      px: 3,
      py: 2,
    }}
  />
);

export {Card};
