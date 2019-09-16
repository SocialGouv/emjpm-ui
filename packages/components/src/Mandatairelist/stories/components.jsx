import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Box, Flex, Text } from 'rebass';

import { Button } from '../../../../core/src/Button';
import { PANEL_TYPE } from '../constants/type';
import { MandataireContext } from '../context';

export const ChooseComponent = (props) => {
  const { currentMandataire } = props;
  const { setCurrentMandataire, setPanelType } = useContext(MandataireContext);
  return (
    <Flex flexDirection="column">
      <Box mb="2">
        <Text>ChooseComponent id: {currentMandataire}</Text>
      </Box>
      <Box mb="1">
        <Button
          onClick={() => {
            setPanelType(PANEL_TYPE.EDIT);
            setCurrentMandataire();
          }}
        >
          Fermer
        </Button>
      </Box>
    </Flex>
  );
};

ChooseComponent.defaultProps = {
  currentMandataire: null,
};

ChooseComponent.propTypes = {
  currentMandataire: PropTypes.number,
};
