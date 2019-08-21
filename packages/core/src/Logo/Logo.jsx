import PropTypes from 'prop-types';
import React from 'react';
import { Box, Flex, Text } from 'rebass';

import { Marianne } from './Marianne';
import { LogoStyle, logoTextStyle } from './style';

const Logo = (props) => {
  const { hasTitle } = props;
  return (
    <Flex>
      <Box sx={LogoStyle}>
        <Marianne />
      </Box>
      {hasTitle && (
        <Box>
          <Text sx={logoTextStyle}>
            empjm.
            <b>beta.gouv</b>
            .fr
          </Text>
        </Box>
      )}
    </Flex>
  );
};

Logo.propTypes = {
  hasTitle: PropTypes.bool,
};

Logo.defaultProps = {
  hasTitle: true,
};

export { Logo };
