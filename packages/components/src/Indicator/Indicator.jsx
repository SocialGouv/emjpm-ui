import PropTypes from 'prop-types';
import React from 'react';
import { Box } from 'rebass';

import { Card } from '../../../core/src/Card';
import { Heading0, Heading4 } from '../../../core/src/Heading';
import { Spinner } from '../../../core/src/Spinner';

const Indicator = (props) => {
  const { error, loading, indicator, title } = props;
  if (error) {
    return (
      <Card height="100%">
        <Heading4>{title}</Heading4>
        <Heading4 color="error" mt="7">
          aucune données disponible
        </Heading4>
      </Card>
    );
  }

  if (loading) {
    return (
      <Card height="100%">
        <Heading4>{title}</Heading4>
        <Box mt="7">
          <Spinner />
        </Box>
      </Card>
    );
  }

  return (
    <Card height="100%">
      <Heading4>{title}</Heading4>
      <Heading0 mt="7">{indicator}</Heading0>
    </Card>
  );
};

Indicator.propTypes = {
  error: PropTypes.string.isRequired,
  indicator: PropTypes.string.isRequired,
  loading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export { Indicator };
