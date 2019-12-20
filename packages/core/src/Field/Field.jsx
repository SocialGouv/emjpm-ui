import PropTypes from 'prop-types';
import React from 'react';
import { Box } from 'rebass';

const Field = (props) => {
  const { children, ...parentProps } = props;

  return (
    <Box sx={{ mb: 4 }} {...parentProps}>
      {children}
    </Box>
  );
};

Field.propTypes = {
  children: PropTypes.node.isRequired,
};

Field.propTypes = {};

Field.defaultProps = {};

export { Field };
