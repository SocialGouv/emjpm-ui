import PropTypes from 'prop-types';
import React from 'react';
import { Flex, Text } from 'rebass';
import { Exclamation } from "styled-icons/evil/Exclamation";

const InlineError = ({ message, fieldId }) => (
  <Flex id={fieldId} alignItems="center" py="2" color="error" >
    <Exclamation size="20" />
    <Text mx="1" fontSize="1">{message}</Text>
  </Flex>
);

InlineError.propTypes = {
  fieldId: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export { InlineError };
